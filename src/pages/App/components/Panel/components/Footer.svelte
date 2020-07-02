<script>
    import {
        showPanel,
        informations,
    } from '/src/js/store';

    import Button from '/src/components/Button.svelte';
</script>

<div
    on:mouseenter={() => { document.getElementById('panel').classList.add('group', 'hover:bg-white') }}
    on:mouseleave={() => { document.getElementById('panel').classList.remove('group', 'hover:bg-white') }}
    class="
    opacity-0
    group-hover:opacity-100
    py-4
    px-2
    sm:px-8
    flex
    items-center
    justify-between
    text-gray-700
    text-sm
    font-medium
    leading-relaxed
    transition
    duration-300
    ease-in-out
">
    <div class="
        flex
        space-x-1
        sm:space-x-3
    ">
        <Button
            href="https://github.com/gawlk/quickbook"
            blank
            tertiary
            hasIcon
            label="Go to github page"
            customPadding="p-2"
        >
            <svg slot="icon" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
        </Button>
        <Button
            href="https://docs.google.com/forms/d/e/1FAIpQLSfK8Nyl5YqrFe-fpioeEX6Hq_GPasoV7yUmlsimAjzI4l8tRA/viewform"
            blank
            tertiary
            hasIcon
            label="Go to feedback page"
            customPadding="p-2"
        >
            <svg slot="icon" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd"/>
            </svg>
        </Button>
        <Button
            href="https://www.buymeacoffee.com/gawlk"
            blank
            tertiary
            hasIcon
            label="Go to donation page"
            customPadding="p-2"
        >
            <svg slot="icon" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-coffee"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>
            </svg>
        </Button>
    </div>
    <div class="
        flex
        items-center
        space-x-3
        sm:space-x-6
        pl-2
        xl:pr-2
        transition-opacity
        ease-out
        {$informations.pageCounter === 0 ? 'opacity-0' : 'opacity-100 duration-1000'}
    ">
        <div class="
            flex
            items-center
            space-x-2
        ">
            <p>
                {$informations.charactersCounter}
            </p>
            <svg class="text-gray-400" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M12 10a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
        </div>
        <div class="
            flex
            items-center
            space-x-2
        ">
            <p>
                {$informations.wordsCounter}
            </p>
            <svg class="text-gray-400" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"/>
            </svg>
        </div>
        <div class="
            flex
            items-center
            space-x-2
        ">
            <p>
                {$informations.pageCounter}
            </p>
            <svg class="text-gray-400" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
            </svg>
        </div>
        <Button
            on:click={() => { $showPanel = false }}
            tertiary
            hasIcon
            label="Hide panel"
            customPadding="p-2"
            class="
            block
            xl:hidden
        ">
            <svg slot="icon" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z"/>
            </svg>
        </Button>
    </div>
</div>
