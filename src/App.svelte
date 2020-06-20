<script>
    import ackeeTracker from 'ackee-tracker';

    import './js/sw';
    import BannerUpdate from './components/BannerUpdate.svelte';
    import Router from './Router.svelte';

    ! window.location.hash && window.location.replace(`${window.location.origin}/#${window.location.pathname}`);

    // Remember to stop the record when navigating to a new page
    const instance = ackeeTracker.create({
        server: 'https://ackee.gawlik.io',
        domainId: 'acf48a42-b795-4202-834d-e23531572138',
    });

    instance.record();
</script>

<style>
    @font-face {
        font-family: 'Inter var';
        font-weight: 100 900;
        font-style: normal;
        font-named-instance: 'Regular';
        font-display: swap;
        src: url("/fonts/Inter-roman.var.woff2") format("woff2");
    }

    @font-face {
        font-family: 'Inter var';
        font-weight: 100 900;
        font-style: italic;
        font-named-instance: 'Italic';
        font-display: swap;
        src: url("/fonts/Inter-italic.var.woff2") format("woff2");
    }

    @font-face {
        font-family: 'Literata var';
        font-weight: 100 900;
        font-style: normal;
        font-named-instance: 'Regular';
        font-display: swap;
        src: url("/fonts/Literata-roman.var.ttf") format("truetype");
    }

    @font-face {
        font-family: 'Literata var';
        font-weight: 100 900;
        font-style: italic;
        font-named-instance: 'Italic';
        font-display: swap;
        src: url("/fonts/Literata-italic.var.ttf") format("truetype");
    }

    @font-face {
        font-family: 'Fira Code var';
        font-weight: 100 900;
        font-style: normal;
        font-named-instance: 'Regular';
        font-display: swap;
        src: url("/fonts/FiraCode.var.ttf") format("truetype");
    }
</style>

<BannerUpdate />
<Router />
