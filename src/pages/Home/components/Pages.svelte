<script>
    import { onMount } from 'svelte';

    import { generatePages } from 'src/js/pages';
    import { pages } from 'src/js/store';

    onMount(() => {
        setTimeout(() => generatePages(), 1000);
    });
</script>

<style>
    :global(.katex) {
        margin: 0 0.5rem;
    }

    :global(page) {
        height: 297mm;
        width: 210mm;
    }

    :global(.no-scrollbar) {
        scrollbar-width: none;
        -ms-overflow-style: none;
    }

    :global(.no-scrollbar::-webkit-scrollbar) {
        width: 0;
        height: 0;
    }

    @page {
        size: A4;
    }

    @media print {
        :global(#panel) {
            display: none;
        }

        :global(#pages, #margin) {
            overflow: visible;
            width: 210mm !important;
        }

        :global(#shell) {
            display: block;
        }

        :global(page, #pages, #margin) {
            margin: 0 !important;
        }
    }
</style>

<div
    id="margin"
    class="
    min-w-1/2
    flex-none
    bg-gray-100
    hidden
    xl:block
    xl:overflow-y-auto
    no-scrollbar
">
    <div
        id="pages"
        bind:this={$pages}
        style="width: calc(794px + 2rem)"
        class="
        mx-auto
    ">
    </div>
</div>
