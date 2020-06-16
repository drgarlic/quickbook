<script>
    // import * as ackeeTracker from 'ackee-tracker';

    import './js/sw';
    import BannerUpdate from './components/BannerUpdate.svelte';
    import Router from './Router.svelte';

    // Remember to stop the record when navigating to a new page
    // const instance = ackeeTracker.create({
    //     server: 'https://ackee.gawlik.io',
    //     domainId: 'acf48a42-b795-4202-834d-e23531572138',
    // });

    // console.log(instance);
    // console.log(window.location.href);
    // console.log(document.referrer);

    // instance.record({
    //     siteLocation: window.location.href,
    //     siteReferrer: document.referrer,
    // });
</script>

<BannerUpdate />
<Router />
