<script>
    import Router from 'svelte-spa-router';

    import Home from './pages/Home/index.svelte';

    const routes = {
        '/:data?': Home,
    };
</script>

<Router {routes} />
