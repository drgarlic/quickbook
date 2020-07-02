<script>
    import { compressToString } from '/src/js/compressors';
    import { getText } from '/src/js/editor';

    import Button from '/src/components/Button.svelte';
    import Notification from '/src/components/Notification.svelte';

    const getCompressedData = () => compressToString(JSON.stringify({ text: getText() }));

    let toggle = false;

    const generateShareLink = () => {
        const url = `${window.location.origin}/#/app/${getCompressedData()}`;

        try {
            navigator.clipboard.writeText(url);
        } catch (e) {
            const element = document.createElement('textarea');
            element.value = url;
            document.body.appendChild(element);
            element.select();
            document.execCommand('copy');
            document.body.removeChild(element);
        }

        if (! toggle) {
            toggle = true;
            setTimeout(() => toggle = false, 5000);
        }
    };
</script>

<Button
    on:click={generateShareLink}
    tertiary
    hasIcon
    label="Share"
    customPadding="p-2"
>
    <svg slot="icon" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5858 4.58579C13.3668 3.80474 14.6331 3.80474 15.4142 4.58579C16.1952 5.36683 16.1952 6.63316 15.4142 7.41421L12.4142 10.4142C11.6331 11.1953 10.3668 11.1953 9.58577 10.4142C9.19524 10.0237 8.56208 10.0237 8.17156 10.4142C7.78103 10.8047 7.78103 11.4379 8.17156 11.8284C9.73365 13.3905 12.2663 13.3905 13.8284 11.8284L16.8284 8.82843C18.3905 7.26633 18.3905 4.73367 16.8284 3.17157C15.2663 1.60948 12.7337 1.60948 11.1716 3.17157L9.67156 4.67157C9.28103 5.0621 9.28103 5.69526 9.67156 6.08579C10.0621 6.47631 10.6952 6.47631 11.0858 6.08579L12.5858 4.58579ZM7.58579 9.58579C8.36683 8.80474 9.63316 8.80474 10.4142 9.58579C10.8047 9.97631 11.4379 9.97631 11.8284 9.58579C12.219 9.19526 12.219 8.5621 11.8284 8.17157C10.2663 6.60948 7.73367 6.60948 6.17157 8.17157L3.17157 11.1716C1.60948 12.7337 1.60948 15.2663 3.17157 16.8284C4.73367 18.3905 7.26633 18.3905 8.82843 16.8284L10.3284 15.3284C10.719 14.9379 10.719 14.3047 10.3284 13.9142C9.9379 13.5237 9.30474 13.5237 8.91421 13.9142L7.41421 15.4142C6.63316 16.1953 5.36684 16.1953 4.58579 15.4142C3.80474 14.6332 3.80474 13.3668 4.58579 12.5858L7.58579 9.58579Z"/>
    </svg>
</Button>

<Notification
    {toggle}
    on:close={() => { toggle = false }}
    title="Link copied !"
    description="Now anyone with the link can view the current markdown."
>
    <svg class="text-gray-400" height="20" width="20" fill="currentColor" viewBox="0 0 20 20">
        <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"/>
        <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z"/>
    </svg>
</Notification>
