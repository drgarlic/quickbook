<script>
    import { createEventDispatcher } from 'svelte';

    let _class = '';
    export { _class as class };

    export let href = undefined;
    export let blank = false;
    export let type = undefined;
    export let label = '';

    export let big = false;
    export let active = false;

    export let secondary = false;
    export let tertiary = false;
    export let danger = false;
    $: primary = ! secondary && ! tertiary && ! danger;

    export let animate = undefined;
    $: _animate = animate !== undefined ? animate : (primary || secondary);

    export let customPadding = '';

    const dispatch = createEventDispatcher();

    let size;
    $: {
        size = `
            ${customPadding || 'px-4 py-2'}
            sm:text-sm
            sm:leading-5
            space-x-1
        `;
        if (big) {
            size = `
                ${customPadding || 'px-8 py-3 md:px-10 md:py-4'}
                leading-6
                space-x-3
                md:text-lg
            `;
        }
    }

    let colors;
    $: {
        if (primary) {
            colors = `
                text-white
                bg-gray-600
                hover:bg-gray-500
            `;
        }
        if (secondary) {
            colors = `
                text-gray-400
                bg-white
                hover:text-gray-500
                ${active ? 'text-gray-500' : ''}
            `;
            // if (! light) {
            //     colors += `
            //         dark:text-gray-500
            //         dark:hover:text-gray-400
            //         dark:bg-gray-900
            //         dark:hover:bg-gray-800
            //     `;
            // }
        } else if (tertiary) {
            colors = `
                text-gray-400
                hover:text-gray-500
                ${active ? 'text-gray-500' : ''}
            `;
        } else if (danger) {
            colors = `
                text-red-700
                bg-red-100
                hover:bg-red-50
                focus:border-red-300
                focus:shadow-outline-red
                active:bg-red-200
            `;
        }
    };

    $: animation = 'hover:-translate-y-px ' + (big ? 'hover:shadow' : 'hover:shadow-sm');

    $: activated = '-translate-y-px ' + (big ? 'shadow' : 'shadow-sm');

    $: classes = `
        ${size}
        ${colors}
        w-full
        flex
        items-center
        justify-center
        border
        border-transparent
        font-medium
        rounded-md
        select-none
        transition
        duration-150
        ease-in-out
        focus:outline-none
        ${_animate ? 'group-hover:shadow-xs' : ''}
        ${active ? 'shadow-xs' : ''}
    `;
</script>

<div class="
    group
    rounded-md
    transform
    duration-150
    {_animate ? animation : ''}
    {active ? activated : ''}
    {_class}
">
    {#if href}
        <a
            aria-label={label}
            title={label}
            href={href.startsWith('http') ? href : '#' + href}
            rel={blank === true ? 'noopener noreferrer' : ''}
            target={blank === true ? '_blank' : ''}
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
            class="
            {classes}
        ">
            <slot>
                Name
            </slot>
        </button>
    {/if}
</div>
