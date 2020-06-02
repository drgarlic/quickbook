<script>
    import { onMount } from 'svelte';
    import { get } from 'svelte/store';

    import { generatePages } from 'src/js/pages';
    import {
        text,
        textarea,
    } from 'src/js/store';
    import {
        handleKeydown,
        setSelection,
    } from 'src/js/textarea';

    onMount(() => {
        setTimeout(() => setSelection(0), 1000);
    });

    let STATE = {
        IDLE: 0,
        RUNNING: 1,
    };

    let state = STATE.IDLE;

    const processText = async () => {
        if (state === STATE.IDLE) {
            const handle = async () => {
                await generatePages();
                cancelAnimationFrame(id);
                state = STATE.IDLE;
            };
            state = STATE.RUNNING;
            let id = requestAnimationFrame(handle);
        }
    };
</script>

<textarea
    bind:this={$textarea}
    bind:value={$text}
    on:keydown={handleKeydown}
    on:keyup={processText}
    placeholder="Write something here..."
    class="
    bg-gray-50
    flex-1
    p-4
    rounded-md
    shadow-inner
    w-full
    bg-transparent
    font-mono
    text-sm
    font-medium
    leading-relaxed
    outline-none
    resize-none
    no-scrollbar
    sm:p-6
"/>
