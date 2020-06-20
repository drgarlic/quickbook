<script>
    import Router from 'svelte-spa-router';
    import { ChunkGenerator } from 'svelte-spa-chunk/src/index';
    import ChunkComponent from 'svelte-spa-chunk/Chunk.svelte';

    const Chunk = ChunkGenerator(ChunkComponent);

    const routes = {
        '/': Chunk(() => import('./pages/Home/index.svelte')),
        '/app': Chunk(() => import('./pages/App/index.svelte')),
        '/app/:data?': Chunk(() => import('./pages/App/index.svelte')),
    };
</script>

<Router {routes} />
