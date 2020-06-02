<script>
    import Router from 'svelte-spa-router';
    import { ChunkGenerator } from 'svelte-spa-chunk';
    import ChunkComponent from 'svelte-spa-chunk/Chunk.svelte';

    const Chunk = ChunkGenerator(ChunkComponent);

    const routes = {
        '/:data?': Chunk(() => import('./pages/Home'))
    };
</script>

<Router {routes} />
