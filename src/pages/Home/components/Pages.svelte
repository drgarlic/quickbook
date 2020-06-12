<script>
    import {
        pages,
        showPanel,
    } from 'src/js/store';

    import Button from 'src/components/Button';

    let width = 0;

    $: width >= 1280 && ($showPanel = true);
</script>

<style>
    :global(.katex) {
        margin: 0 0.5rem;
    }

    :global(page) {
        height: 297mm;
        width: 210mm;
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

<svelte:window bind:innerWidth={width}/>

<div
    id="margin"
    class="
    flex-none
    block
    bg-gray-100
    xl:shadow-inner
    xl:min-w-1/2
    xl:overflow-y-auto
">
    <div
        id="pages"
        bind:this={$pages}
        style="width: calc(794px + 2rem)"
        class="
        bg-gray-100
        xl:bg-transparent
        mx-auto
    " />
    <div class="
        fixed
        bottom-0
        right-0
        mx-2
        sm:mx-8
        my-4
        xl:hidden
    ">
        <Button
            on:click={() => { $showPanel = true }}
            tertiary
            animate
            customPadding="p-2"
            class="
            bg-white
            shadow
        ">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z"/>
            </svg>
        </Button>
    </div>
</div>
