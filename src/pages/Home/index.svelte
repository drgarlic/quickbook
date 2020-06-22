<script>
    // import * as sal from 'sal.js';
    // console.log(sal);


    import Button from '/src/components/Button.svelte';
</script>

<div
    class="
    h-screen
    w-screen
    p-8
    xl:flex
    xl:space-x-16
">
    <div class="
        relative
        flex-1
        h-full
        flex
        items-center
        justify-center
    ">
        <div class="
            absolute
            top-0
            inset-x-0
            py-8
            max-w-2xl
            xl:max-w-xl
            mx-auto
            flex
            items-center
            justify-between
        ">
            <div class="
                inline-flex
                items-center
                space-x-2
                text-gray-600
            ">
                <svg class="h-6 sm:h-8 w-auto" viewBox="0 0 100 100" fill="currentColor" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                    <path d="M26.457,66.681c-8.511,-6.878 -13.957,-17.398 -13.957,-29.181c0,-20.697 16.803,-37.5 37.5,-37.5c20.697,0 37.5,16.803 37.5,37.5c0,11.774 -5.438,22.289 -13.939,29.167l9.772,0c2.3,0 4.167,1.867 4.167,4.166c0,2.3 -1.867,4.167 -4.167,4.167l-54.982,0c-4.149,0 -7.518,3.369 -7.518,7.518l0,1.631c0,4.149 3.369,7.518 7.518,7.518l54.982,0c2.3,0 4.167,1.867 4.167,4.166c0,2.3 -1.867,4.167 -4.167,4.167l-56.254,0c-0.014,0 -0.028,0 -0.041,0c-8.031,-0.042 -14.538,-6.575 -14.538,-14.616l0,-4.101c0,-7.847 6.196,-14.257 13.957,-14.602Zm58.282,16.652c0,-2.299 -1.867,-4.166 -4.167,-4.166l-50,0c-2.3,0 -4.167,1.867 -4.167,4.166c0,2.3 1.867,4.167 4.167,4.167l50,0c2.3,0 4.167,-1.867 4.167,-4.167Zm-34.739,-70.833c13.798,0 25,11.202 25,25c0,13.798 -11.202,25 -25,25c-13.798,0 -25,-11.202 -25,-25c0,-13.798 11.202,-25 25,-25Z"/>
                </svg>
                <svg class="h-4 sm:h-5 w-auto hidden sm:block" viewBox="0 0 271 39" fill="currentColor" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                    <g>
                        <path d="M20.017,1.277c2.533,0 4.916,0.484 7.15,1.45c2.233,0.967 4.175,2.275 5.825,3.925c1.65,1.65 2.958,3.592 3.925,5.825c0.966,2.234 1.45,4.617 1.45,7.15c0,2.6 -0.5,5.017 -1.5,7.25c-1,2.234 -2.367,4.2 -4.1,5.9l5.6,0l0,5.15l-18.35,0c-2.534,0 -4.909,-0.483 -7.125,-1.45c-2.217,-0.966 -4.15,-2.275 -5.8,-3.925c-1.65,-1.65 -2.959,-3.583 -3.925,-5.8c-0.967,-2.216 -1.45,-4.591 -1.45,-7.125c0,-2.533 0.483,-4.916 1.45,-7.15c0.966,-2.233 2.275,-4.175 3.925,-5.825c1.65,-1.65 3.583,-2.958 5.8,-3.925c2.216,-0.966 4.591,-1.45 7.125,-1.45Zm0.15,31.5c1.8,0 3.491,-0.35 5.075,-1.05c1.583,-0.7 2.966,-1.65 4.15,-2.85c1.183,-1.2 2.116,-2.591 2.8,-4.175c0.683,-1.583 1.025,-3.275 1.025,-5.075c0,-1.833 -0.342,-3.55 -1.025,-5.15c-0.684,-1.6 -1.625,-3 -2.825,-4.2c-1.2,-1.2 -2.6,-2.141 -4.2,-2.825c-1.6,-0.683 -3.317,-1.025 -5.15,-1.025c-1.8,0 -3.5,0.342 -5.1,1.025c-1.6,0.684 -3,1.625 -4.2,2.825c-1.2,1.2 -2.142,2.6 -2.825,4.2c-0.684,1.6 -1.025,3.317 -1.025,5.15c0,1.8 0.341,3.5 1.025,5.1c0.683,1.6 1.625,3 2.825,4.2c1.2,1.2 2.6,2.142 4.2,2.825c1.6,0.684 3.3,1.025 5.1,1.025l0.15,0Z" style="fill-rule:nonzero;"/>
                        <path d="M64.267,11.427l0,13.7c0,5.7 -3.2,8.8 -8.2,8.8c-4.55,0 -7.15,-2.6 -7.15,-7.8l0,-14.7l-4.8,0l0,15.25c0,7.8 4.55,11.55 11.4,11.55c3.75,0 7.05,-1.55 9,-4.3l0,4l4.55,0l0,-26.5l-4.8,0Z" style="fill-rule:nonzero;"/>
                        <path d="M78.117,6.327c1.9,0 3.25,-1.4 3.25,-3.2c0,-1.7 -1.4,-3.05 -3.25,-3.05c-1.85,0 -3.25,1.4 -3.25,3.15c0,1.75 1.4,3.1 3.25,3.1Zm-2.4,31.6l4.8,0l0,-26.5l-4.8,0l0,26.5Z" style="fill-rule:nonzero;"/>
                        <path d="M98.717,38.227c4.75,0 8.7,-2 10.8,-5.7l-3.65,-2.3c-1.7,2.6 -4.3,3.8 -7.2,3.8c-5.2,0 -9.1,-3.6 -9.1,-9.35c0,-5.65 3.9,-9.3 9.1,-9.3c2.9,0 5.5,1.2 7.2,3.8l3.65,-2.35c-2.1,-3.7 -6.05,-5.65 -10.8,-5.65c-8.15,0 -14,5.6 -14,13.5c0,7.9 5.85,13.55 14,13.55Z" style="fill-rule:nonzero;"/>
                        <path d="M133.117,37.927l5.9,0l-12.25,-15.55l11.15,-10.95l-5.8,0l-14.45,13.2l0,-23.8l-4.8,0l0,37.1l4.8,0l0,-7.25l5.5,-5.1l9.95,12.35Z" style="fill-rule:nonzero;"/>
                        <path d="M159.567,10.627c-3.35,0 -6.1,1.05 -8.1,3.25l0,-13.05l-7.8,0l0,37.1l7.45,0l0,-3.1c1.95,2.35 4.85,3.5 8.45,3.5c7.55,0 13.4,-5.4 13.4,-13.85c0,-8.45 -5.85,-13.85 -13.4,-13.85Zm-1.35,21.3c-3.9,0 -6.85,-2.8 -6.85,-7.45c0,-4.65 2.95,-7.45 6.85,-7.45c3.9,0 6.85,2.8 6.85,7.45c0,4.65 -2.95,7.45 -6.85,7.45Z" style="fill-rule:nonzero;"/>
                        <path d="M190.217,38.327c8.55,0 14.75,-5.75 14.75,-13.85c0,-8.1 -6.2,-13.85 -14.75,-13.85c-8.55,0 -14.8,5.75 -14.8,13.85c0,8.1 6.25,13.85 14.8,13.85Zm0,-6.4c-3.9,0 -6.9,-2.8 -6.9,-7.45c0,-4.65 3,-7.45 6.9,-7.45c3.9,0 6.85,2.8 6.85,7.45c0,4.65 -2.95,7.45 -6.85,7.45Z" style="fill-rule:nonzero;"/>
                        <path d="M222.217,38.327c8.55,0 14.75,-5.75 14.75,-13.85c0,-8.1 -6.2,-13.85 -14.75,-13.85c-8.55,0 -14.8,5.75 -14.8,13.85c0,8.1 6.25,13.85 14.8,13.85Zm0,-6.4c-3.9,0 -6.9,-2.8 -6.9,-7.45c0,-4.65 3,-7.45 6.9,-7.45c3.9,0 6.85,2.8 6.85,7.45c0,4.65 -2.95,7.45 -6.85,7.45Z" style="fill-rule:nonzero;"/>
                        <path d="M259.717,37.927l9.45,0l-12.2,-15.5l11.2,-11.4l-9.3,0l-11.4,10.8l0,-21l-7.8,0l0,37.1l7.8,0l0,-6.85l3.75,-3.7l8.5,10.55Z" style="fill-rule:nonzero;"/>
                    </g>
                </svg>
            </div>
            <div class="
                pt-1
                grid
                grid-cols-3
                gap-2
            ">
                <!-- <a>Github</a> -->
                <Button
                    href="https://github.com/gawlk/quickbook"
                    label="Go to the github page"
                    tertiary
                    big
                    blank
                    customPadding="px-3 sm:px-3 py-1 sm:py-3"
                >
                    Github
                </Button>
                <Button
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfK8Nyl5YqrFe-fpioeEX6Hq_GPasoV7yUmlsimAjzI4l8tRA/viewform"
                    label="Go to the feedback page"
                    tertiary
                    big
                    blank
                    customPadding="px-2 sm:px-3 py-1 sm:py-3"
                >
                    Feedback
                </Button>
                <Button
                    href="https://www.buymeacoffee.com/gawlk"
                    label="Go to the donation page"
                    tertiary
                    big
                    blank
                    customPadding="px-3 sm:px-3 py-1 sm:py-3"
                >
                    Donate
                </Button>
            </div>
        </div>
        <div class="
            space-y-12
            text-center
            max-w-2xl
            xl:text-left
            xl:max-w-xl
        ">
            <div class="
                space-y-8
            ">
                <h2 class="
                    text-4xl
                    tracking-tight
                    leading-10
                    font-extrabold
                    text-gray-800
                    sm:text-5xl
                    sm:leading-none
                    md:text-6xl
                ">
                    Write books.
                    <br>
                    Without hassle.
                </h2>
                <p class="
                    text-base
                    text-gray-500
                    sm:text-lg
                ">
                    Ever wanted to write something simply but with still total control over the design ? Here's an application for you.
                </p>
            </div>
            <div class="
                mx-auto
                w-1/2
                xl:mx-0
            ">
                <!-- <div
                    data-sal="slide-up"
                    data-sal-delay="300"
                    data-sal-easing="ease-out-back"
                > -->
                    <Button
                        big
                        href="/app"
                        label="Go to the app"
                    >
                        Start now
                    </Button>
                <!-- </div> -->
                <!-- <Button
                    tertiary
                    big
                >
                    See features
                </Button> -->
            </div>
        </div>
    </div>

    <!--
      Mobile menu, show/hide based on menu open state.

      Entering: "duration-150 ease-out"
        From: "opacity-0 scale-95"
        To: "opacity-100 scale-100"
      Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
    -->
    <!-- <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div class="rounded-lg shadow-md">
            <div class="rounded-lg bg-white shadow-xs overflow-hidden" role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
                <div class="px-5 pt-4 flex items-center justify-between">
                    <div>
                        <img class="h-8 w-auto" src="/img/logos/workflow-mark-on-white.svg" alt="" />
                    </div>
                    <div class="-mr-2">
                        <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" aria-label="Close menu">
                            <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="px-2 pt-2 pb-3">
                    <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Product
                    </a>
                    <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Features
                    </a>
                    <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Marketplace
                    </a>
                    <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Company
                    </a>
                </div>
            </div>
        </div>
    </div> -->

    <div class="
        hidden
        flex-1
        h-full
        max-h-full
        bg-gray-800
        rounded-3xl
        xl:block
    ">
        <div class="
            p-32
            max-h-full
            h-full
            flex
            items-center
            justify-center
        ">
            <svg class="flex-1 -ml-1/3" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 900.94 787">
                <defs>
                    <linearGradient id="33dd52eb-d837-4874-aadb-63a17bd6edfc" x1="611.05" y1="646" x2="611.05" y2="103.5" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stop-color="gray" stop-opacity="0.25"/>
                        <stop offset="0.54" stop-color="gray" stop-opacity="0.12"/>
                        <stop offset="1" stop-color="gray" stop-opacity="0.1"/>
                    </linearGradient>
                </defs>
                <title>coding</title>
                <rect x="763.63" y="283" width="52" height="27" fill="#93d293" opacity="0.2"/>
                <rect x="767.63" y="316" width="52" height="27" fill="#93d293" opacity="0.2"/>
                <rect x="724.63" y="87" width="52" height="27" fill="#93d293" opacity="0.2"/>
                <rect x="761.63" y="118" width="52" height="27" fill="#93d293" opacity="0.2"/>
                <rect x="661.63" y="89" width="52" height="27" fill="#93d293" opacity="0.2"/>
                <rect x="828.63" y="149" width="52" height="27" fill="#93d293" opacity="0.2"/>
                <rect x="765.63" y="151" width="52" height="27" fill="#93d293" opacity="0.2"/>
                <rect x="698.63" y="120" width="52" height="27" fill="#93d293" opacity="0.2"/>
                <rect x="825.63" y="357" width="52" height="27" fill="#93d293" opacity="0.2"/>
                <rect x="762.63" y="359" width="52" height="27" fill="#93d293" opacity="0.2"/>
                <path d="M280.17,332.5s73.29,73.29,31.92,182S383,804.14,383,804.14s-1.2-.18-3.43-.57C229.05,777,154.26,604.85,238,477,269.08,429.41,294.62,373.64,280.17,332.5Z" transform="translate(-149.42 -56.5)" fill="#93d293"/>
                <path d="M280.17,332.5s41.37,89.84,0,163.12-7.09,279,102.84,308.52" transform="translate(-149.42 -56.5)" fill="none" stroke="#535461" stroke-miterlimit="10" stroke-width="2"/>
                <path d="M149.63,628.92s83.63-13.32,91.25,61.63S401.7,775.89,401.7,775.89s-1,.68-2.87,1.91c-126.49,83-247.4,52.89-229.17-57.36C176.43,679.45,175.87,638.28,149.63,628.92Z" transform="translate(-149.42 -56.5)" fill="#93d293"/>
                <path d="M149.63,628.92s83.63-13.32,91.25,61.63S401.7,775.89,401.7,775.89s-1,.68-2.87,1.91c-126.49,83-247.4,52.89-229.17-57.36C176.43,679.45,175.87,638.28,149.63,628.92Z" transform="translate(-149.42 -56.5)" fill="#f5f5f5" opacity="0.2"/>
                <path d="M149.63,628.92s64.91,14.25,59.58,73.27S305.61,832,401.7,775.89" transform="translate(-149.42 -56.5)" fill="none" stroke="#535461" stroke-miterlimit="10" stroke-width="2"/>
                <rect x="0.63" y="284" width="52" height="27" fill="#93d293" opacity="0.2"/>
                <rect x="37.63" y="315" width="52" height="27" fill="#93d293" opacity="0.2"/>
                <rect x="318.63" width="52" height="27" fill="#93d293" opacity="0.2"/>
                <rect x="728.63" y="498" width="52" height="27" fill="#93d293" opacity="0.2"/>
                <rect x="41.63" y="348" width="52" height="27" fill="#93d293" opacity="0.2"/>
                <rect x="355.63" y="31" width="52" height="27" fill="#93d293" opacity="0.2"/>
                <rect x="165.63" y="214" width="52" height="27" fill="#93d293" opacity="0.2"/>
                <rect x="202.63" y="245" width="52" height="27" fill="#93d293" opacity="0.2"/>
                <rect x="301.63" y="228" width="52" height="27" fill="#93d293" opacity="0.2"/>
                <rect x="206.63" y="278" width="52" height="27" fill="#93d293" opacity="0.2"/>
                <rect x="798.63" y="498" width="52" height="27" fill="#93d293" opacity="0.2"/>
                <path d="M870.07,447.61a412.25,412.25,0,0,1-6.18-56.71h0a76,76,0,0,0-53.46-69.38c-5.46-1.68-11.47-3.25-18.11-4.66-58.2-12.36-75.88-1.57-77.89-.15A74.63,74.63,0,0,1,710,307.1c-.1-.34-.19-.68-.29-1a74.51,74.51,0,0,0,19.91-44.89c9.71-9.84,15.38-21.72,15.38-34.51,0-11-4.2-21.32-11.55-30.25V179.07a75.57,75.57,0,0,0-75.57-75.57h-6.13a75.57,75.57,0,0,0-75.57,75.57v18.73c-6.67,8.61-10.45,18.44-10.45,28.88,0,12.52,5.44,24.16,14.78,33.88a74.52,74.52,0,0,0,20.74,46.34c.41,2.84.83,5.89,1.24,9.11L498.39,338s-40.14,1.65-66,55C410.52,438.19,367,554.29,354.11,588.85h0c-2.33,6.26-3.65,9.85-3.65,9.85s.43-.43,1.24-1.17l-1.24,3.37s.63-.64,1.83-1.69c-1.82,14.46-2.08,39.29,16.86,42.38,15.88,2.59,56.8,3.66,87.71,4.09v0H459c20.49.27,36.08.27,36.08.27v-.27H827.52v-3.41a22.91,22.91,0,0,0-1.83-9l.46-.56a18.25,18.25,0,0,1,3.45,8,8,8,0,0,1-.16.84l.2-.51a8.56,8.56,0,0,1-.2,2.71s42.65-109.89,42.19-175.51A111.17,111.17,0,0,0,870.07,447.61ZM604.22,330.86a76.25,76.25,0,0,1-1.06-9.48s0-.06,0-.09C603.53,324.38,603.89,327.58,604.22,330.86ZM475,566.9v26.19L458.6,596.6Z" transform="translate(-149.42 -56.5)" fill="url(#33dd52eb-d837-4874-aadb-63a17bd6edfc)"/>
                <path d="M503.71,57.57h0a75.57,75.57,0,0,1,75.57,75.57v32.24a0,0,0,0,1,0,0H428.14a0,0,0,0,1,0,0V133.14A75.57,75.57,0,0,1,503.71,57.57Z" fill="#e14b5a"/>
                <ellipse cx="504.24" cy="175.95" rx="86.14" ry="59.19" fill="#e14b5a"/>
                <path d="M598.44,289.79s18,94.07,0,119.44,55,35.41,55,35.41L729,417.16l10.57-67.65s-46-25.9-36.47-78.22Z" transform="translate(-149.42 -56.5)" fill="#f7c4a7"/>
                <path d="M821.46,606.89s4.76,20.61-21.14,24.31a146.45,146.45,0,0,1-46.08-.55l-5.71-51.77h60.25Z" transform="translate(-149.42 -56.5)" fill="#f7c4a7"/>
                <path d="M364.12,580.51S352.68,627,378.58,631.2s121,4.23,121,4.23v-55l-43.06,9.2L416.1,550.87Z" transform="translate(-149.42 -56.5)" fill="#f7c4a7"/>
                <path d="M604,320.18l-101.21,21.4s-38.58,1.59-63.42,52.85-78.75,197.66-78.75,197.66,46-46.51,99.89,3.17l35.94-65-7.93,103.06H767V584.69s58.13,31.18,53.91,48.62c0,0,49.75-128.18,39-186.43a396.18,396.18,0,0,1-5.94-54.5h0a73,73,0,0,0-51.38-66.67c-5.24-1.61-11-3.12-17.4-4.47-59.72-12.68-75,0-75,0s-11.57,37.64-11.36,54.7c.26,21.93-31.18,36.47-31.18,36.47s-46.51-11.1-48.62-20.08S600.28,330.75,604,320.18Z" transform="translate(-149.42 -56.5)" opacity="0.1"/>
                <path d="M604,318.07l-101.21,21.4s-38.58,1.59-63.42,52.85S360.61,590,360.61,590s46-46.51,99.89,3.17l35.94-65L488.51,631.2H767V582.58s58.13,31.18,53.91,48.62c0,0,49.75-128.18,39-186.43a396.18,396.18,0,0,1-5.94-54.5h0a73,73,0,0,0-51.38-66.67c-5.24-1.61-11-3.12-17.4-4.47-59.72-12.68-75,0-75,0s-11.57,37.64-11.36,54.7c.26,21.93-31.18,36.47-31.18,36.47s-46.51-11.1-48.62-20.08S600.28,328.64,604,318.07Z" transform="translate(-149.42 -56.5)" fill="#575988"/>
                <path d="M707.42,313.58a71.53,71.53,0,0,1-2.76-37.52L600,294.55s1.51,7.91,3.22,19.76a71.86,71.86,0,0,0,104.18-.73Z" transform="translate(-149.42 -56.5)" opacity="0.1"/>
                <path d="M725.27,259.67a71.88,71.88,0,0,1-143.73,1.74c0-.58,0-1.16,0-1.74a71.89,71.89,0,0,1,40.29-64.59q3.23-1.58,6.64-2.84a72.39,72.39,0,0,1,37-3.44h0a71.82,71.82,0,0,1,59.61,66.1Q725.27,257.27,725.27,259.67Z" transform="translate(-149.42 -56.5)" fill="#f7c4a7"/>
                <g opacity="0.1">
                    <path d="M628.36,193.93l.1-.06q-3.41,1.26-6.64,2.84a71.89,71.89,0,0,0-40.29,64.59c0,.58,0,1.16,0,1.74a16,16,0,0,0,6.45-1.55c17.52-8.18,28-33.2,32.16-50.65C621.64,204.59,623.05,197.55,628.36,193.93Z" transform="translate(-149.42 -56.5)"/>
                    <path d="M683.37,195.94a71.28,71.28,0,0,0-17.87-5.51,23.06,23.06,0,0,1,12.83,8.06,32.86,32.86,0,0,1,3.93,7,72.07,72.07,0,0,0-60.45,1.25c4.51,9.89,18.5,15.28,27.84,18.89q15.34,5.92,31,10.83l-9.24-7.5,20.87,3.32a36.15,36.15,0,0,0-1.46-12.3c4,3.22,9.3,4.3,13.64,7,8.13,5.13,11.52,15,15.95,23.55,1.17,2.26,2.55,4.57,4.66,6A71.91,71.91,0,0,0,683.37,195.94Z" transform="translate(-149.42 -56.5)"/>
                </g>
                <path d="M628.36,192.3l.1-.06q-3.41,1.26-6.64,2.84a71.89,71.89,0,0,0-40.29,64.59c0,.58,0,1.16,0,1.74a16,16,0,0,0,6.45-1.55c17.52-8.18,28-33.2,32.16-50.65C621.64,203,623.05,195.93,628.36,192.3Z" transform="translate(-149.42 -56.5)" fill="#632652"/>
                <path d="M683.37,194.32a71.28,71.28,0,0,0-17.87-5.51,23.06,23.06,0,0,1,12.83,8.06,32.86,32.86,0,0,1,3.93,7,72.07,72.07,0,0,0-60.45,1.25c4.51,9.89,18.5,15.28,27.84,18.89q15.34,5.92,31,10.83l-9.24-7.5,20.87,3.32a36.15,36.15,0,0,0-1.46-12.3c4,3.22,9.3,4.3,13.64,7,8.13,5.13,11.52,15,15.95,23.55,1.17,2.26,2.55,4.57,4.66,6A71.91,71.91,0,0,0,683.37,194.32Z" transform="translate(-149.42 -56.5)" fill="#632652"/>
                <path d="M573.33,247.82s74-92,159.61,0l-7.4-20.61s-40.17-58.66-68.7-46-56.55,21.67-56.55,21.67Z" transform="translate(-149.42 -56.5)" opacity="0.1"/>
                <path d="M573.33,246.19s74-92,159.61,0l-7.4-20.61s-40.17-58.66-68.7-46-56.55,21.67-56.55,21.67Z" transform="translate(-149.42 -56.5)" fill="#e14b5a"/>
                <path d="M512.55,444.38s-15.85,42.28,6.34,80.33-19.55,53.91-19.55,53.91" transform="translate(-149.42 -56.5)" opacity="0.1"/>
                <path d="M769.4,406.33s27.48,34.88,9.51,66.06S762,578.62,762,578.62" transform="translate(-149.42 -56.5)" opacity="0.1"/>
                <path d="M338.82,553.3H644.29a25.37,25.37,0,0,1,25.37,25.37v0a0,0,0,0,1,0,0H313.46a0,0,0,0,1,0,0v0A25.37,25.37,0,0,1,338.82,553.3Z" fill="#535461"/>
                <path d="M369.9,378.89H613.22a39,39,0,0,1,39,39V559.11a0,0,0,0,1,0,0H330.9a0,0,0,0,1,0,0V417.89A39,39,0,0,1,369.9,378.89Z" fill="#535461"/>
                <circle cx="491.29" cy="476.93" r="19.03" fill="#fff"/>
                <path d="M577.56,204.7s72.72-72.68,151.15-1.33" transform="translate(-149.42 -56.5)" fill="none" stroke="#000" stroke-miterlimit="10" opacity="0.1"/>
                <rect x="590.36" y="143.57" width="7.3" height="41.39" fill="#6a5c99"/>
                <path d="M580.62,170.35h0a25.16,25.16,0,0,1,25.16,25.16v1.62a25.16,25.16,0,0,1-25.16,25.16h0a0,0,0,0,1,0,0V170.35a0,0,0,0,1,0,0Z" fill="#ffd037"/>
                <rect x="575.75" y="167.92" width="11.36" height="56.81" rx="5.68" ry="5.68" fill="#6a5c99"/>
                <rect x="558.44" y="200.88" width="7.3" height="41.39" transform="translate(974.76 386.65) rotate(-180)" fill="#6a5c99"/>
                <path d="M550.32,227.66h0a25.16,25.16,0,0,1,25.16,25.16v1.62a25.16,25.16,0,0,1-25.16,25.16h0a0,0,0,0,1,0,0V227.66A0,0,0,0,1,550.32,227.66Z" transform="translate(976.38 450.76) rotate(180)" fill="#ffd037"/>
                <rect x="568.99" y="225.23" width="11.36" height="56.81" rx="5.68" ry="5.68" transform="translate(999.92 450.76) rotate(-180)" fill="#6a5c99"/>
                <path d="M738.92,155.83c-9.89-20.56-31.43-45.42-77.86-47.41v-.06l-.56,0h0l-16.45.78v.08c-46.12,2.12-67.56,26.89-77.42,47.38A106.59,106.59,0,0,0,556.41,201l5.68-.14,5.68-.13A96.65,96.65,0,0,1,577,161.21c12.52-25.72,35.56-39.39,68.47-40.66h0l14.55-.81h0C692.95,121,716,134.69,728.51,160.4a96.65,96.65,0,0,1,9.25,39.54l5.68.13,5.68.14A106.59,106.59,0,0,0,738.92,155.83Z" transform="translate(-149.42 -56.5)" fill="#ffd037"/>
                <rect x="74.28" y="579" width="774.71" height="208" fill="#d6d6e3"/>
                <rect x="74.28" y="593" width="774.71" height="27" opacity="0.1"/>
                <rect x="22.31" y="576" width="878.63" height="27" fill="#d6d6e3"/>
            </svg>
        </div>
    </div>
</div>
