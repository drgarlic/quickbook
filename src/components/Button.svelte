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

    export let secondary = false;
    export let tertiary = false;
    export let danger = false;
    $: primary = ! secondary && ! tertiary && ! danger;

    export let customPadding = '';

    const dispatch = createEventDispatcher();

    let sizeClasses;
    $: {
        sizeClasses = `
            ${customPadding || 'px-4 py-2'}
            text-sm
            border-2
            space-x-1
            rounded-md
            sm:leading-5
        `;
        if (big) {
            sizeClasses = `
                ${customPadding || 'px-8 py-3 md:px-10 md:py-4'}
                border-4
                leading-6
                space-x-3
                rounded-lg
                md:text-lg
            `;
        }
    }

    let colorClasses;
    let hoverClasses;
    let focusClasses;
    let activeClasses;
    let disabledClasses = 'opacity-50 cursor-wait';
    $: {
        hoverClasses = 'hover:-translate-y-px ';
        focusClasses = 'focus:-translate-y-px ';
        activeClasses = 'active:-translate-y-px ';

        if (primary) {
            colorClasses = 'text-white bg-gray-600';
            hoverClasses += 'hover:bg-gray-500';
            focusClasses += 'focus-not-active:bg-gray-500';
            activeClasses += 'active:bg-gray-600 active:border-gray-500';
        } else if (secondary) {
            colorClasses = 'text-gray-500 bg-white border-gray-300';
            hoverClasses += 'hover:text-gray-600 hover:bg-gray-50';
            focusClasses += 'focus-not-active:text-gray-600 focus-not-active:bg-gray-50';
            activeClasses += 'active:border-gray-500';
        } else if (tertiary) {
            colorClasses = 'text-gray-400';
            hoverClasses += 'hover:text-gray-500 hover:bg-gray-50';
            focusClasses += 'focus-not-active:text-gray-500 focus-not-active:bg-gray-50';
            activeClasses += 'active:text-gray-500 active:bg-white active:border-gray-50';
        } else if (danger) {
            colorClasses = 'text-red-700 bg-red-100';
            hoverClasses += 'hover:bg-red-50';
            focusClasses += 'focus-not-active:bg-red-50';
            activeClasses += 'active:bg-red-100';
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
                ? activeClasses.replace(/active:/gi, '')
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
        <slot>
            Name
        </slot>
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
        <slot>
            Name
        </slot>
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
        <slot>
            Name
        </slot>
    </button>
{/if}
