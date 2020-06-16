<script>
    import { defaultThemes } from '/src/js/defaults';
    import { spreadAll } from '/src/js/pages';
    import {
        modal,
        themes,
    } from '/src/js/store';
    import {
        changeTheme,
        createTheme,
    } from '/src/js/themes';

    import Button from '/src/components/Button.svelte';
    import Dropdown from '/src/components/Dropdown.svelte';
    import DropdownItem from '/src/components/DropdownItem.svelte';

    let toggle = false;

    let imported = false;

    $: if (toggle && ! imported) {
        document.getElementsByTagName("head")[0].insertAdjacentHTML(
            'beforeend',
            '<link rel="stylesheet" type="text/css" href="/css/tailwind-full.css">'
        );
        imported = true;
    }

    const handleTheme = (name) => {
        changeTheme(name);
        spreadAll();
    };

    const handleNewTheme = () => {
        createTheme();
        spreadAll();
        $modal = 'theme';
    };
</script>

<Dropdown
    {toggle}
    label="Themes"
    on:update={(event) => { toggle = event.detail.value }}
>
    <div slot="button">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clip-rule="evenodd"/>
        </svg>
    </div>
    <div slot="content">
        {#each Object.entries($themes) as [name, data]}
            <DropdownItem
                onClick={() => { handleTheme(name) }}
                onClickBis={() => { handleTheme(name); $modal = 'theme'; }}
                text={name}
            >
                <span slot="icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                        {#if name in defaultThemes}
                            <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        {:else}
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"/>
                        {/if}
                    </svg>
                </span>
                <span slot="icon2">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"/>
                    </svg>
                </span>
            </DropdownItem>
        {/each}
        <DropdownItem
            onClick={handleNewTheme}
            text="Create a theme"
        >
            <span slot="icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 3C10.5523 3 11 3.44772 11 4V9H16C16.5523 9 17 9.44772 17 10C17 10.5523 16.5523 11 16 11H11V16C11 16.5523 10.5523 17 10 17C9.44772 17 9 16.5523 9 16V11H4C3.44772 11 3 10.5523 3 10C3 9.44771 3.44772 9 4 9L9 9V4C9 3.44772 9.44772 3 10 3Z" />
                </svg>
            </span>
        </DropdownItem>
    </div>
</Dropdown>
