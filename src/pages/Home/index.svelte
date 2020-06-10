<script>
    import packageJson from 'src/../package.json';

    import { defaultTheme } from 'src/js/defaults';
    import { importData } from 'src/js/importer';
    import { initializeThemes } from 'src/js/themes';

    import Panel from './components/Panel';
    import Pages from './components/Pages';

    export let params = {};

    initializeThemes();

    importData(params.data);
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
    scrollbar
    xl:flex
">
    <Panel />
    <Pages />
</div>
