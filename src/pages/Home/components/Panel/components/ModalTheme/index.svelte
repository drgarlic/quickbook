<script>
    import { defaultThemes } from '/src/js/defaults';
    import { spreadAll } from '/src/js/pages';
    import {
        modal,
        theme,
    } from '/src/js/store';
    import {
        deleteTheme,
        renameTheme,
    } from '/src/js/themes';

    import Button from '/src/components/Button.svelte';
    import Input from '/src/components/Input.svelte';
    import Link from '/src/components/Link.svelte';
    import Modal from '/src/components/Modal.svelte';
    import Tuple from './components/Tuple.svelte';

    export let toggle;

    const handleDelete = () => {
        $modal = undefined;
        deleteTheme($theme);
        spreadAll();
    };

    let pile = []
    const handleRename = (event) => {
        pile.push(setTimeout(() => {
            pile.length === 1 && renameTheme(event.detail.value);
            pile.shift();
        }, 500));
    }

    const elements = [
        {
            element: 'page',
            label: 'Page',
        },
        {
            element: 'paragraph',
            label: 'Paragraph',
        },
        {
            element: 'strong',
            label: 'Bold',
        },
        {
            element: 'em',
            label: 'Italic',
        },
        {
            element: 'del',
            label: 'Deleted',
        },
        {
            element: 'h1',
            label: 'Heading 1',
        },
        {
            element: 'h2',
            label: 'Heading 2',
        },
        {
            element: 'h3',
            label: 'Heading 3',
        },
        {
            element: 'h4',
            label: 'Heading 4',
        },
        {
            element: 'h5',
            label: 'Heading 5',
        },
        {
            element: 'h6',
            label: 'Heading 6',
        },
        {
            element: 'link',
            label: 'Link',
        },
        {
            element: 'image',
            label: 'Image',
        },
        {
            element: 'ol',
            label: 'Ordered list',
        },
        {
            element: 'ul',
            label: 'Unordered list',
        },
        {
            element: 'li',
            label: 'List item',
        },
        {
            element: 'table',
            label: 'Table',
        },
        {
            element: 'th',
            label: 'Table head',
        },
        {
            element: 'tr',
            label: 'Table row',
        },
        {
            element: 'td',
            label: 'Table cell',
        },
        {
            element: 'codespan',
            label: 'Code span',
        },
        {
            element: 'pre',
            label: 'Code block (box)',
        },
        {
            element: 'code',
            label: 'Code block (code)',
        },
        {
            element: 'blockquote',
            label: 'Block quote',
        },
        {
            element: 'hr',
            label: 'Horizontal rule',
        },
        {
            element: 'checkbox',
            label: 'Checkbox',
        },
    ];
</script>

<Modal
    {toggle}
    positionAbsolute
    noBackground
    full
>
    <div class="
        flex-none
        border-b
        border-gray-200
        px-4
        py-5
        sm:px-6
    ">
        <div class="
            flex
            justify-between
            items-center
        ">
            <div>
                <h2 class="
                    text-xl
                    font-bold
                    leading-7
                    truncate
                    text-gray-900
                    sm:text-2xl
                    sm:leading-9
                ">
                    Theme customization
                </h2>
                <p class="
                    m-1
                    text-sm
                    leading-5
                    text-gray-500
                ">
                    You can use all the CSS classes from <Link href="https://tailwindcss.com" label="Go to tailwind documentation">Tailwind CSS</Link> and for those interested, here's the <Link href="https://github.com/gawlk/quickbook/blob/master/tailwind.config.js" label="Go to tailwind configuration file">configuration file used</Link>
                </p>
            </div>
            <span class="
                flex-none
                ml-1
            ">
                <Button
                    on:click={() => { $modal = undefined }}
                    label="Go back"
                >
                    Go back
                </Button>
            </span>
        </div>
    </div>
    <div class="
        flex-1
        overflow-y-auto
    ">
        <div class="
            px-4
            py-5
            sm:p-6
            space-y-8
        ">
            {#if ! ($theme in defaultThemes)}
                <div class="
                    space-y-4
                ">
                    <h3 class="
                        text-lg
                        leading-6
                        font-medium
                        text-gray-900
                    ">
                        Name
                    </h3>
                    <Input
                        value={$theme}
                        on:update={handleRename}
                        placeholder="Write the name of the theme here"
                    />
                </div>
            {/if}
            {#each elements as el}
                <Tuple
                    element={el.element}
                    label={el.label}
                />
            {/each}
            {#if ! ($theme in defaultThemes)}
                <div class="
                    space-y-4
                ">
                    <h3 class="
                        text-lg
                        leading-6
                        font-medium
                        text-gray-900
                    ">
                        Delete
                    </h3>
                    <Button
                        on:click={handleDelete}
                        danger
                    >
                        Click here to delete the theme
                    </Button>
                </div>
            {/if}
        </div>
    </div>
</Modal>
