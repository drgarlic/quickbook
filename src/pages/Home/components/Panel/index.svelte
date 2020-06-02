<script>
    import Footer from './components/Footer';
    import ModalTheme from './components/ModalTheme';
    import Header from './components/Header';
    import Textarea from './components/Textarea';

    import { modal } from 'src/js/store';
</script>

<div
    id="panel"
    class="
    relative
    flex-1
    py-4
    px-2
    flex
    flex-col
    shadow
    space-y-4
    sm:px-8
">
    <Header />
    <Textarea />
    <Footer />
    <ModalTheme
        toggle={$modal === 'theme'}
    />
</div>
