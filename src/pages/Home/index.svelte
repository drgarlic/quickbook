<script>
    import { defaultTheme } from 'src/js/defaults';
    import { importData } from 'src/js/importer';
    import { initializeThemes } from 'src/js/themes';

    import Panel from './components/Panel';
    import Pages from './components/Pages';

    export let params = {};

    initializeThemes();

    importData(params.data);
</script>

<div
    id="shell"
    class="
    relative
    flex
    h-screen
    max-w-screen
">
    <Panel />
    <Pages />
</div>
