<script>
    import packageJson from '/src/../package.json';

    import { importData } from '/src/js/importer';
    import { initializeThemes } from '/src/js/themes';

    import Panel from './components/Panel/index.svelte';
    import Pages from './components/Pages.svelte';

    export let params = {};

    let imported = false;

    $: if (! imported) {
        document.getElementsByTagName('head')[0].insertAdjacentHTML(
            'beforeend',
            '<link rel="stylesheet" type="text/css" href="/css/tailwind-full.css">'
        );
        imported = true;
    }

    initializeThemes();

    const text = importData(params.data);
</script>

<svelte:head>
    <title>Quickbook</title>
    <meta name="description" content={packageJson.description} />
</svelte:head>

<div
    id="shell"
    class="
    relative
    h-screen
    max-w-screen
    xl:flex
">
    <Panel {text} />
    <Pages />
</div>
