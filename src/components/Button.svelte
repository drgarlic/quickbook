<script>
    import { createEventDispatcher } from 'svelte';

    let _class = '';
    export { _class as class };

    export let href = undefined;
    export let blank = false;
    export let type = undefined;
    export let label;

    export let big = false;
    export let active = false;
    export let disabled = false;
    export let hasIcon = false;

    export let secondary = false;
    export let tertiary = false;
    export let danger = false;
    export let white = false;
    $: primary = ! secondary && ! tertiary && ! danger && ! white;

    export let customPadding = '';

    const dispatch = createEventDispatcher();

    let sizeClasses;
    $: {
        sizeClasses = `
            ${customPadding || 'px-4 py-2'}
            text-sm
            border-2
            space-x-2
            rounded-md
            sm:leading-5
        `;
        if (big) {
            sizeClasses = `
                ${customPadding || 'px-8 py-3 md:px-10 md:py-4'}
                border-4
                leading-6
                space-x-4
                rounded-lg
                md:text-lg
            `;
        }
    }

    let colorClasses;
    let hoverClasses;
    let focusClasses;
    let activeClasses;
    let activatedClasses;
    let disabledClasses;
    $: {
        hoverClasses = 'hover:-translate-y-px ';
        focusClasses = 'focus:-translate-y-px ';
        activeClasses = 'active:-translate-y-px active:scale-95 ';
        activatedClasses = '-translate-y-px ';
        disabledClasses = 'opacity-50 cursor-wait ';

        if (primary) {
            colorClasses = `text-white bg-gray-900`;
            hoverClasses += `hover:bg-gray-800`;
            focusClasses += `focus-not-active:bg-gray-800`;
            activeClasses += `active:bg-gray-900 active:border-gray-800`;
            activatedClasses += `bg-gray-900 border-gray-800`;
        } else if (secondary) {
            colorClasses = `text-gray-600 bg-gray-100`;
            hoverClasses += `hover:bg-gray-50`;
            focusClasses += `focus-not-active:bg-gray-50`;
            activeClasses += `active:bg-gray-100 active:border-gray-50`;
            activatedClasses += `bg-gray-100 border-gray-50`;
        } else if (tertiary) {
            colorClasses = `text-gray-500`;
            hoverClasses += `hover:text-gray-600 hover:bg-gray-50`;
            focusClasses += `focus-not-active:text-gray-600 focus-not-active:bg-gray-50`;
            activeClasses += `active:text-gray-600 active:bg-white active:border-gray-50`;
            activatedClasses += `bg-transparent text-gray-600 border-gray-50`;
        } else if (danger) {
            colorClasses = `text-red-700 bg-red-100`;
            hoverClasses += `hover:bg-red-50`;
            focusClasses += `focus-not-active:bg-red-50`;
            activeClasses += `active:bg-red-100`;
            activatedClasses += `bg-red-100`;
        } else if (white) {
            colorClasses = `text-gray-600 bg-white`;
            hoverClasses += `hover:text-gray-500`;
            focusClasses += `focus-not-active:text-gray-500`;
            activeClasses += `active:text-gray-600`;
            activatedClasses += `text-gray-600`;
        }
    };

    $: classes = `
        w-full
        flex
        items-center
        justify-center
        font-medium
        select-none
        transition
        transform
        duration-150
        ease-in-out
        focus:outline-none
        ${colorClasses}
        ${sizeClasses}
        ${disabled
            ? disabledClasses
            : (active
                ? activatedClasses
                : `border-transparent ${hoverClasses} ${focusClasses} ${activeClasses}`
            )
        }
        ${_class}
    `;
</script>

{#if href}
    <a
        aria-label={label}
        title={label}
        href={href.startsWith('http') ? href : '#' + href}
        rel={blank === true ? 'noopener noreferrer' : ''}
        target={blank === true ? '_blank' : ''}
        {disabled}
        class="
        {classes}
    ">
        {#if hasIcon}
            <div class="opacity-75">
                <slot name="icon" />
            </div>
        {/if}
        <slot />
    </a>
{:else if type}
    <button
        aria-label={label}
        title={label}
        {type}
        {disabled}
        class="
        {classes}
    ">
        {#if hasIcon}
            <div class="opacity-75">
                <slot name="icon" />
            </div>
        {/if}
        <slot />
    </button>
{:else}
    <button
        on:click={() => { dispatch('click') }}
        aria-label={label}
        title={label}
        type="button"
        {disabled}
        class="
        {classes}
    ">
        {#if hasIcon}
            <div class="opacity-75">
                <slot name="icon" />
            </div>
        {/if}
        <slot />
    </button>
{/if}
