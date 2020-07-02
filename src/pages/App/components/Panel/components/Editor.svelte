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
    flex-1
    w-full
    px-2
    sm:px-8
">
    <div class="
        p-4
        h-full
        w-full
        transition
        duration-300
        ease-in-out
        group-hover:bg-gray-50
        rounded-xl
        group-hover:shadow-inner
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
                xl:font-medium
                xl:text-sm
            "/>
        </div>
    </div>
</div>
