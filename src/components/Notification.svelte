<script>
    import {
        onDestroy,
        onMount,
    } from 'svelte';

    import Transition from 'svelte-class-transition';

    export let toggle;

    let element;

    onMount(() => {
        document.body.append(element);
    });
</script>

<div bind:this={element}>
    <Transition
        {toggle}
    >
        <div
            class="
            absolute
            inset-0
            flex
            items-end
            justify-center
            px-4
            py-6
            pointer-events-none
            sm:p-6
            sm:items-start
            sm:justify-end
        ">
            <Transition
                inState="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                onState="translate-y-0 opacity-100 sm:translate-x-0"
                outState="opacity-0"
                transitions="transition transform"
                inTransition="ease-out duration-300"
                outTransition="ease-in duration-100"
            >
                <div class="
                    max-w-sm
                    w-full
                    bg-white
                    shadow-lg
                    rounded-lg
                    pointer-events-auto
                ">
                    <div class="
                        rounded-lg
                        shadow-xs
                        overflow-hidden
                    ">
                        <div class="
                            p-4
                        ">
                            <div class="
                                flex
                                items-center
                            ">
                                <div class="
                                    w-0
                                    flex-1
                                    flex
                                    justify-between
                                ">
                                    <p class="w-0 flex-1 text-sm leading-5 font-medium text-gray-900">
                                        Discussion archived
                                    </p>
                                    <button class="ml-3 flex-shrink-0 text-sm leading-5 font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                                        Undo
                                    </button>''
                                </div>
                                <div class="ml-4 flex-shrink-0 flex">
                                    <button class="inline-flex text-gray-400 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150">
                                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
        </div>
    </Transition>
</div>
