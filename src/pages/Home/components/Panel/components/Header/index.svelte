<script>
    import ButtonImport from './components/ButtonImport';
    import ButtonShare from './components/ButtonShare';
    import DropdownExport from './components/DropdownExport';
    import DropdownImages from './components/DropdownImages';
    import DropdownInsert from './components/DropdownInsert';
    import DropdownThemes from './components/DropdownThemes';
</script>

<div class="
    flex
    items-center
    space-x-2
">
    <div class="
        flex-1
        flex
        items-center
        px-2
        text-lg
        space-x-2
    ">
        <!-- <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg> -->
        <p class="
            block
            sm:hidden
        ">
            <span>Q</span><span class="font-extrabold text-gray-600">B</span>
        </p>
        <p class="
            hidden
            sm:block
        ">
            <span class="font-light">Quick</span><span class="font-black text-gray-600">book</span>
        </p>
    </div>
    <div class="
        flex
        space-x-1
        sm:space-x-3
    ">
        <ButtonImport />
        <DropdownThemes />
        <DropdownInsert />
        <DropdownImages />
        <ButtonShare />
        <DropdownExport />
    </div>
</div>
