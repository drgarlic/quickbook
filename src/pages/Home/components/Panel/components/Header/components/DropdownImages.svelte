<script>
    import Compressor from 'compressorjs';

    import { insertText } from 'src/js/editor';
    import { images } from 'src/js/store';

    import Button from 'src/components/Button';
    import Dropdown from 'src/components/Dropdown';
    import DropdownItem from 'src/components/DropdownItem';

    let toggle = false;
    let input;
    let files;

    const handleImage = (name) => {
        setTimeout(() => insertText(`![${name}](${name})`), 500);
    };

    const handleFiles = async () => {
        for (let file of files) {
            file = await compressImage(file);
            $images[file.name.replace(/ /g, '_')] = await toBase64(file);
        }
    };

    const toBase64 = (file) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    const compressImage = (file) => new Promise((resolve, reject) => {
        new Compressor(file, {
            quality: 0.6,
            checkOrientation: false,
            maxHeight: 1123,
            maxWidth: 794,
            success(result) {
                resolve(result);
            },
            error(error) {
                reject(error);
            },
        });
    });

    const removeImage = (name) => {
        delete $images[name];
        $images = $images;
    };

    const clean = () => {
        $images = {};
        localStorage.removeItem('images');
    };
</script>

<Dropdown
    {toggle}
    label="Images"
    on:update={(event) => { toggle = event.detail.value }}
>
    <div slot="button">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4 3C2.89543 3 2 3.89543 2 5V15C2 16.1046 2.89543 17 4 17H16C17.1046 17 18 16.1046 18 15V5C18 3.89543 17.1046 3 16 3H4ZM16 15H4L8 7L11 13L13 9L16 15Z"/>
        </svg>
    </div>
    <div slot="content">
        {#each Object.entries($images) as [name, data]}
            <DropdownItem
                onClick={() => { handleImage(name) }}
                onClickBis={() => { removeImage(name) }}
                text={name}
            >
                <span slot="icon">
                    <img
                        src={data}
                        alt={name}
                        class="
                        h-5
                        w-5
                        rounded-md
                        opacity-75
                        shadow
                        group-hover:opacity-100
                    ">
                </span>
                <span slot="icon2">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                    </svg>
                </span>
            </DropdownItem>
        {/each}
        <DropdownItem
            onClick={() => { input.click() }}
            text="Add images"
        >
            <span slot="icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 3C10.5523 3 11 3.44772 11 4V9H16C16.5523 9 17 9.44772 17 10C17 10.5523 16.5523 11 16 11H11V16C11 16.5523 10.5523 17 10 17C9.44772 17 9 16.5523 9 16V11H4C3.44772 11 3 10.5523 3 10C3 9.44771 3.44772 9 4 9L9 9V4C9 3.44772 9.44772 3 10 3Z" />
                </svg>
            </span>
        </DropdownItem>
        <input
            bind:this={input}
            bind:files
            on:change={handleFiles}
            accept="image/*"
            multiple
            type="file"
            class="
            hidden
        ">
        <DropdownItem
            onClick={clean}
            text="Remove all images"
        >
            <span slot="icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"/>
                </svg>
            </span>
        </DropdownItem>
    </div>
</Dropdown>
