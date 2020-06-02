<script>
    import { createEventDispatcher } from 'svelte';
    import Transition from 'svelte-class-transition';

    import Button from './Button';

    export let toggle = false;

    let button;
    let dropdown;

    const dispatch = createEventDispatcher();

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
                toggle = false;
            }
        }
    }
</script>

<svelte:body on:click={onClickOutside} />

<div class="
    relative
    inline-block
    text-left
">
    <div bind:this={button}>
        <Button
            on:click={() => { toggle = ! toggle }}
            active={toggle}
            secondary
            customPadding="p-2"
        >
            <slot name="button">
            </slot>
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
            origin-top-right
            right-0
            md:-right-22
            md:origin-center
            mt-2
            w-56
            rounded-md
            shadow-lg
        ">
            <div class="
                rounded-md
                bg-white
                shadow-xs
                px-2
                py-1
            ">
                <slot name="content"></slot>
            </div>
        </div>
    </Transition>
</div>
