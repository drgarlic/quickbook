<script>
    import { onMount } from 'svelte';

    import { initEditor } from '/src/js/editor';
    import { informations } from '/src/js/store';

    export let text;

    onMount(() => {
        initEditor(text);
    });
</script>

<div class="
    mt-4
    bg-gray-50
    flex-1
    p-4
    rounded-lg
    w-full
    sm:p-6
">
    <div class="
        h-full
        w-full
        transition-opacity
        ease-out
        {$informations.pageCounter === 0 ? 'opacity-0' : 'opacity-100 duration-1000'}
    ">
        <div
            id="editor"
            class="
            h-full
            w-full
            font-mono
            text-gray-700
            subpixel-antialiased
            leading-relaxed
            text-base
            xl:text-sm
        "/>
    </div>
</div>
