<script>
    import Transition from 'svelte-class-transition';

    import Editor from './components/Editor.svelte';
    import Footer from './components/Footer.svelte';
    import Header from './components/Header/index.svelte';
    import ModalTheme from './components/ModalTheme/index.svelte';

    import {
        modal,
        showPanel,
    } from '/src/js/store';

    export let text;
</script>

<Transition
    toggle={$showPanel}
    transitions="transition-opacity"
    inTransition="ease-out duration-300"
    inState="opacity-0"
    onState="opacity-100"
    outTransition="ease-in duration-200"
>
    <div
        id="panel"
        class="
        fixed
        inset-0
        z-10
        xl:relative
        xl:flex-1
    ">
        <div
            class="
            h-full
            bg-white
            py-4
            px-2
            flex
            flex-col
            sm:px-8
        ">
            <Header />
            <Editor {text} />
            <Footer />
            <ModalTheme
                toggle={$modal === 'theme'}
            />
        </div>
    </div>
</Transition>
