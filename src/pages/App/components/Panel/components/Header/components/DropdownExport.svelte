<script>
    import {
        downloadHTML,
        downloadMarkdown,
        downloadPDF,
        downloadQuickbook,
    } from '/src/js/exporter';

    import Button from '/src/components/Button.svelte';
    import Dropdown from '/src/components/Dropdown.svelte';
    import DropdownItem from '/src/components/DropdownItem.svelte';
    import Modal from '/src/components/Modal.svelte';
    import Notification from '/src/components/Notification.svelte';

    let toggle = false;
    let toggleModal = false;
    let toggleNotification = false;
    let disabled = false;
    let error = false;

    const handleClose = () => {
        toggleModal = false;
        toggleNotification = false;
        disabled = false;
        error = false;
    }

    const handlePDF = async () => {
        toggleNotification = true;
        disabled = true;
        error = false;

        try {
            await downloadPDF();
            toggleNotification = false;
        } catch (e) {
            error = true;
        }

        disabled = false;
    };
</script>

<Dropdown
    {toggle}
    label="Export"
    on:update={(event) => { toggle = event.detail.value }}
>
    <div slot="button">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"/>
        </svg>
    </div>
    <div slot="content">
        <DropdownItem
            onClick={downloadMarkdown}
            text="Export to Markdown"
        >
            <span slot="icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z" clip-rule="evenodd"/>
                </svg>
            </span>
        </DropdownItem>
        <DropdownItem
            onClick={downloadHTML}
            text="Export to HTML"
        >
            <span slot="icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
                </svg>
            </span>
        </DropdownItem>
        <DropdownItem
            onClick={downloadQuickbook}
            text="Export to Quickbook"
        >
            <span slot="icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clip-rule="evenodd"/>
                </svg>
            </span>
        </DropdownItem>
        <DropdownItem
            onClick={() => { toggleModal = true; }}
            text="Export to PDF"
        >
            <span slot="icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 5C2 3.89543 2.89543 3 4 3H12C13.1046 3 14 3.89543 14 5V15C14 16.1046 14.8954 17 16 17H4C2.89543 17 2 16.1046 2 15V5ZM5 6H11V10H5V6ZM11 12H5V14H11V12Z"/>
                    <path d="M15 7H16C17.1046 7 18 7.89543 18 9V14.5C18 15.3284 17.3284 16 16.5 16C15.6716 16 15 15.3284 15 14.5V7Z"/>
                </svg>
            </span>
        </DropdownItem>
    </div>
</Dropdown>

<Modal
    toggle={toggleModal}
>
    <div class="
        px-4
        pt-5
        pb-4
        sm:p-6
    ">
        <div class="
            mx-auto
            flex
            items-center
            justify-center
            h-12 w-12
            rounded-full
            bg-gray-100
        ">
            <svg class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
            </svg>
        </div>
        <div class="
            mt-3
            text-center
            sm:mt-5
            space-y-4
        ">
            <h3
                id="modal-headline"
                class="
                text-lg
                leading-6
                font-medium
                text-gray-900
            ">
                Export to PDF
            </h3>
            <div class="
                text-sm
                leading-5
                text-gray-500
                space-y-2
            ">
                <p>
                    There are two ways for you to export to PDF. You can eiter use the Print functionnality of the browser or we can generate it for you.
                </p>
                <p>
                    The first one is <strong>strongly suggested</strong> but only available for <strong>Chrome (and Chrome based)</strong> users*. It's <strong>faster</strong> and <strong>truer</strong>. You just need to remember to set <strong>Margins</strong> to <strong>None</strong>, <strong>Enable</strong> the <strong>Background graphics</strong> option, and finally <strong>Save as PDF</strong>.
                </p>
                <p>
                    The second one takes <strong>more time</strong> and some emojis might be <strong>missing</strong>. It also <strong>costs me money</strong>. You should note that if the Quickbook is too big, it <strong>might fail</strong>.
                </p>
                <p class="pt-2">
                    <em>*If you have one on your device but aren't using it now, you can also "Export to Quickbook" and import it back there.</em>
                </p>
            </div>
        </div>
        <div class="
            mt-5
            sm:mt-6
            sm:grid
            sm:grid-cols-3
            sm:gap-3
            sm:grid-flow-row-dense
        ">
            <Button
                on:click={handleClose}
                tertiary
                {disabled}
                label="Cancel"
            >
                Cancel
            </Button>
            <Button
                on:click={handlePDF}
                secondary
                {disabled}
                label="Generate PDF"
            >
                Generate PDF
            </Button>
            <Button
                on:click={() => { window.print() }}
                {disabled}
                label="Save as PDF"
            >
                Save as PDF
            </Button>
        </div>
    </div>
</Modal>

<Notification
    toggle={toggleNotification}
    on:close={() => { toggleNotification = false }}
    title={error ? 'An error has occured !' : 'Generating the PDF...'}
    description={error ? 'Sorry, the server returned an error. It either took too long or something went wrong. Please try the other method.' : 'Please wait and don\'t close the tab. We\'ll keep you updated !'}
>
    {#if error}
        <svg class="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke-linecap="round" stroke-width="2" stroke="currentColor">
              <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
    {:else}
        <svg class="text-gray-400" height="20" width="20" fill="currentColor" viewBox="0 0 20 20">
            <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"/>
            <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z"/>
        </svg>
    {/if}
</Notification>
