<script>
    import Router from 'svelte-spa-router';
    import { ChunkGenerator } from 'svelte-spa-chunk/src/index';
    import ChunkComponent from 'svelte-spa-chunk/Chunk.svelte'

    const Chunk = ChunkGenerator(ChunkComponent);

    const routes = {
        '/:data?': Chunk(() => import('./pages/Home/index.svelte')),
    };

    // import Home from './pages/Home/index.svelte';
    // const routes = {
    //     '/:data?': Home,
    // };
</script>

<Router {routes} />
