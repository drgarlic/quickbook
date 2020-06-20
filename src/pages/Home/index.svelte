<script>
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
            <svg class="h-6 sm:h-8 w-auto text-gray-600" viewBox="0 0 584 100" fill="currentColor" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                <g><g><path d="M146.735,18.888c4.406,0 8.55,0.841 12.435,2.522c3.884,1.681 7.26,3.956 10.13,6.826c2.87,2.87 5.145,6.246 6.826,10.13c1.681,3.885 2.522,8.029 2.522,12.435c0,4.522 -0.87,8.725 -2.609,12.609c-1.739,3.884 -4.116,7.304 -7.13,10.261l9.739,0l0,8.956l-31.913,0c-4.406,0 -8.536,-0.84 -12.392,-2.521c-3.855,-1.682 -7.217,-3.957 -10.086,-6.827c-2.87,-2.869 -5.145,-6.231 -6.827,-10.086c-1.681,-3.856 -2.521,-7.986 -2.521,-12.392c0,-4.406 0.84,-8.55 2.521,-12.435c1.682,-3.884 3.957,-7.26 6.827,-10.13c2.869,-2.87 6.231,-5.145 10.086,-6.826c3.856,-1.681 7.986,-2.522 12.392,-2.522Zm0.261,54.783c3.13,0 6.072,-0.609 8.826,-1.826c2.753,-1.218 5.159,-2.87 7.217,-4.957c2.058,-2.087 3.681,-4.507 4.87,-7.261c1.188,-2.753 1.782,-5.695 1.782,-8.826c0,-3.188 -0.594,-6.174 -1.782,-8.956c-1.189,-2.783 -2.826,-5.218 -4.913,-7.305c-2.087,-2.087 -4.522,-3.724 -7.305,-4.913c-2.782,-1.188 -5.768,-1.782 -8.956,-1.782c-3.131,0 -6.087,0.594 -8.87,1.782c-2.782,1.189 -5.217,2.826 -7.304,4.913c-2.087,2.087 -3.725,4.522 -4.913,7.305c-1.189,2.782 -1.783,5.768 -1.783,8.956c0,3.131 0.594,6.087 1.783,8.87c1.188,2.782 2.826,5.217 4.913,7.304c2.087,2.087 4.522,3.725 7.304,4.913c2.783,1.189 5.739,1.783 8.87,1.783l0.261,0Z" style="fill-rule:nonzero;"/><path d="M223.691,36.54l0,23.826c0,9.913 -5.565,15.305 -14.261,15.305c-7.913,0 -12.434,-4.522 -12.434,-13.565l0,-25.566l-8.348,0l0,26.522c0,13.565 7.913,20.087 19.826,20.087c6.522,0 12.261,-2.696 15.652,-7.478l0,6.956l7.913,0l0,-46.087l-8.348,0Z" style="fill-rule:nonzero;"/><path d="M247.778,27.671c3.305,0 5.652,-2.435 5.652,-5.565c0,-2.957 -2.434,-5.305 -5.652,-5.305c-3.217,0 -5.652,2.435 -5.652,5.478c0,3.044 2.435,5.392 5.652,5.392Zm-4.174,54.956l8.348,0l0,-46.087l-8.348,0l0,46.087Z" style="fill-rule:nonzero;"/><path d="M283.604,83.149c8.261,0 15.131,-3.478 18.783,-9.913l-6.348,-4c-2.956,4.522 -7.478,6.609 -12.522,6.609c-9.043,0 -15.826,-6.261 -15.826,-16.261c0,-9.826 6.783,-16.174 15.826,-16.174c5.044,0 9.566,2.087 12.522,6.609l6.348,-4.087c-3.652,-6.435 -10.522,-9.826 -18.783,-9.826c-14.174,0 -24.347,9.739 -24.347,23.478c0,13.739 10.173,23.565 24.347,23.565Z" style="fill-rule:nonzero;"/><path d="M343.43,82.627l10.261,0l-21.304,-27.043l19.391,-19.044l-10.087,0l-25.13,22.957l0,-41.391l-8.348,0l0,64.521l8.348,0l0,-12.608l9.565,-8.87l17.304,21.478Z" style="fill-rule:nonzero;"/><path d="M389.43,35.149c-5.826,0 -10.608,1.826 -14.087,5.652l0,-22.695l-13.565,0l0,64.521l12.957,0l0,-5.391c3.391,4.087 8.435,6.087 14.695,6.087c13.131,0 23.305,-9.391 23.305,-24.087c0,-14.696 -10.174,-24.087 -23.305,-24.087Zm-2.347,37.044c-6.783,0 -11.913,-4.87 -11.913,-12.957c0,-8.087 5.13,-12.957 11.913,-12.957c6.782,0 11.913,4.87 11.913,12.957c0,8.087 -5.131,12.957 -11.913,12.957Z" style="fill-rule:nonzero;"/><path d="M442.735,83.323c14.869,0 25.652,-10 25.652,-24.087c0,-14.087 -10.783,-24.087 -25.652,-24.087c-14.87,0 -25.739,10 -25.739,24.087c0,14.087 10.869,24.087 25.739,24.087Zm0,-11.13c-6.783,0 -12,-4.87 -12,-12.957c0,-8.087 5.217,-12.957 12,-12.957c6.782,0 11.913,4.87 11.913,12.957c0,8.087 -5.131,12.957 -11.913,12.957Z" style="fill-rule:nonzero;"/><path d="M498.387,83.323c14.87,0 25.652,-10 25.652,-24.087c0,-14.087 -10.782,-24.087 -25.652,-24.087c-14.87,0 -25.739,10 -25.739,24.087c0,14.087 10.869,24.087 25.739,24.087Zm0,-11.13c-6.783,0 -12,-4.87 -12,-12.957c0,-8.087 5.217,-12.957 12,-12.957c6.783,0 11.913,4.87 11.913,12.957c0,8.087 -5.13,12.957 -11.913,12.957Z" style="fill-rule:nonzero;"/><path d="M563.604,82.627l16.435,0l-21.217,-26.956l19.478,-19.826l-16.174,0l-19.826,18.782l0,-36.521l-13.565,0l0,64.521l13.565,0l0,-11.913l6.522,-6.435l14.782,18.348Z" style="fill-rule:nonzero;"/></g><path d="M18.853,66.681c-8.511,-6.878 -13.957,-17.398 -13.957,-29.181c0,-20.697 16.803,-37.5 37.5,-37.5c20.696,0 37.5,16.803 37.5,37.5c0,11.774 -5.439,22.289 -13.94,29.167l9.773,0c2.3,0 4.167,1.867 4.167,4.166c0,2.3 -1.867,4.167 -4.167,4.167l-54.982,0c-4.149,0 -7.518,3.369 -7.518,7.518l0,1.631c0,4.149 3.369,7.518 7.518,7.518l54.982,0c2.3,0 4.167,1.867 4.167,4.166c0,2.3 -1.867,4.167 -4.167,4.167l-56.254,0c-0.014,0 -0.028,0 -0.042,0c-8.03,-0.042 -14.537,-6.575 -14.537,-14.616l0,-4.101c0,-7.847 6.196,-14.257 13.957,-14.602Zm58.281,16.652c0,-2.299 -1.867,-4.166 -4.166,-4.166l-50,0c-2.3,0 -4.167,1.867 -4.167,4.166c0,2.3 1.867,4.167 4.167,4.167l50,0c2.299,0 4.166,-1.867 4.166,-4.167Zm-34.738,-70.833c13.798,0 25,11.202 25,25c0,13.798 -11.202,25 -25,25c-13.798,0 -25,-11.202 -25,-25c0,-13.798 11.202,-25 25,-25Z"/></g>
            </svg>
            <div class="
                pt-1
                sm:pt-2
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
                    customPadding="px-3 py-3"
                >
                    Github
                </Button>
                <Button
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfK8Nyl5YqrFe-fpioeEX6Hq_GPasoV7yUmlsimAjzI4l8tRA/viewform"
                    label="Go to the feedback page"
                    tertiary
                    big
                    blank
                    customPadding="px-3 py-3"
                >
                    Feedback
                </Button>
                <Button
                    href="https://www.buymeacoffee.com/gawlk"
                    label="Go to the donation page"
                    tertiary
                    big
                    blank
                    customPadding="px-3 py-3"
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
                <Button
                    big
                    href="/app"
                    label="Go to the app"
                >
                    Start now
                </Button>
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
