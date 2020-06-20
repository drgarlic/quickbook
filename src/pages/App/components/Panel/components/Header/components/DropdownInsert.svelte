<script>
    import { insertText } from '/src/js/editor';

    import Button from '/src/components/Button.svelte';
    import Dropdown from '/src/components/Dropdown.svelte';
    import DropdownItem from '/src/components/DropdownItem.svelte';

    let toggle = false;

    const handleInsert = (content) => {
        insertText(content, { newLine: true });
    };
</script>

<Dropdown
    {toggle}
    label="Insert"
    on:update={(event) => { toggle = event.detail.value }}
>
    <div slot="button">
       <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"/>
        </svg>
    </div>
    <div slot="content">
        <DropdownItem
            onClick={() => { handleInsert('<pbr>') }}
            text="Insert a page break"
        >
            <span slot="icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"/>
                </svg>
            </span>
        </DropdownItem>
        <DropdownItem
            onClick={() => { handleInsert('<page class="bg-gray-900 text-gray-50">\n    This is a custom page\n</page>') }}
            text="Insert a custom page"
        >
            <span slot="icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
            </span>
        </DropdownItem>
    </div>
</Dropdown>
