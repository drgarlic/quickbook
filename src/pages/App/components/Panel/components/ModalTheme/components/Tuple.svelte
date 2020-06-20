<script>
    import { defaultThemes } from '/src/js/defaults';
    import { spreadAll } from '/src/js/pages';
    import {
        theme,
        themes,
    } from '/src/js/store';
    import {
        clean,
        getFromTheme,
        updateType,
    } from '/src/js/themes';

    import Button from '/src/components/Button.svelte';
    import Input from '/src/components/Input.svelte';

    export let element;
    export let label;
    export let description = '';

    $: classes = getFromTheme(element, 'classes', $theme);
    $: styles = getFromTheme(element, 'styles', $theme);
    $: defaultClasses = $theme in defaultThemes && clean(defaultThemes[$theme]['classes'][element]) || '';
    $: defaultStyles = $theme in defaultThemes && clean(defaultThemes[$theme]['styles'][element]) || '';

    const isOneNotDefault = (classes, styles) => clean(classes) !== defaultClasses || clean(styles) !== defaultStyles;

    const reset = () => {
        classes = defaultClasses;
        updateType(defaultClasses, element, 'classes');
        styles = defaultStyles;
        updateType(styles, element, 'styles');
        spreadAll();
    };

    const handleInput = (value, type) => {
        updateType(value, element, type);
        spreadAll();
    };
</script>

<div class="
    space-y-4
">
    <div class="
        flex
        justify-between
        items-center
    ">
        <div class="
            space-y-1
        ">
            <h3 class="
                text-lg
                leading-6
                font-medium
                text-gray-900
            ">
                {label}
            </h3>
            {#if description}
                <p class="
                    max-w-2xl
                    text-sm
                    leading-5
                    text-gray-500
                ">
                    {description}
                </p>
            {/if}
        </div>
        {#if $theme in defaultThemes && isOneNotDefault(classes, styles)}
            <Button
                on:click={reset}
                customPadding="p-0"
                tertiary
            >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"/>
                </svg>
                <p>
                    Reset
                </p>
            </Button>
        {/if}
    </div>
    <div class="
        flex
        space-x-4
    ">
        <Input
            value={classes}
            on:update={(event) => {
                handleInput(event.detail.value, 'classes');
                classes = event.detail.value;
            }}
            label="Classes"
            id={label + '-classes'}
            placeholder="Add some classes here"
            type="textarea"
        />
        <Input
            value={styles}
            on:update={(event) => {
                handleInput(event.detail.value, 'styles');
                styles = event.detail.value;
            }}
            label="Styles"
            id={label + '-styles'}
            placeholder="Write your custom styles here"
            type="textarea"
        />
    </div>
</div>
