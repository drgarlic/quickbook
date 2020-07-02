<script>
    import { createEventDispatcher } from 'svelte';
    import Transition from 'svelte-class-transition';

    import Button from './Button.svelte';

    export let toggle;
    export let label;

    let button;
    let dropdown;
    let positionClasses;
    let width;

    const dispatch = createEventDispatcher();

    $: if (width && button) {
        const bb = button.getBoundingClientRect();

        // w-56 = 24 rem = 224px (if base is 16px) / 2 = 112
        const left = bb.left - 112;
        const right = bb.right + 112;

        if (left >= 0 && right > width - 1) {
            positionClasses = 'origin-top-right right-0';
        } else if (left < 0 && right < width) {
            positionClasses = 'origin-top-left left-0';
        } else {
            positionClasses = 'origin-center -right-22';
        }
    }

    const onClickOutside = (event) => {
        if (toggle) {
            const x = event.clientX;
            const y = event.clientY;

            const bb = button.getBoundingClientRect();
            const bd = dropdown.getBoundingClientRect();

            const between = (low, value, high) => value >= low && value <= high;

            if (
                ! (between(bb.left, x, bb.right) && between(bb.top, y, bb.bottom))
                && ! (between(bd.left, x, bd.right) && between(bd.top, y, bd.bottom))
            ) {
                dispatch('update', { value: false });
            }
        }
    }
</script>

<svelte:window bind:innerWidth={width} on:click={onClickOutside} />

<div class="
    relative
    inline-block
    text-left
">
    <div bind:this={button}>
        <Button
            on:click={() => { dispatch('update', { value: ! toggle }); }}
            active={toggle}
            tertiary
            hasIcon
            {label}
            customPadding="p-2"
        >
            <svg slot="icon" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <slot name="button" />
            </svg>
        </Button>
    </div>

    <Transition
        {toggle}
        inState="opacity-0 scale-95"
        onState="opacity-100 scale-100"
        transitions="transition transform"
        inTransition="ease-out duration-100"
        outTransition="ease-in duration-75"
    >
        <div
            bind:this={dropdown}
            class="
            absolute
            z-20
            mt-2
            w-56
            rounded-lg
            shadow-lg
            bg-white
            px-2
            py-1
            {positionClasses}
        ">
            <slot name="content"></slot>
        </div>
    </Transition>
</div>
