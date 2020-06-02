<script>
    import {
        compressToArray,
        compressToString,
    } from 'src/js/compressors';
    import { getUsedImages } from 'src/js/images';
    import { text } from 'src/js/store';

    import Button from 'src/components/Button';
    import Dropdown from 'src/components/Dropdown';
    import DropdownItem from 'src/components/DropdownItem';

    let toggle = false;

    const getData = () => {
        return {
            text: $text,
            images: getUsedImages($text)
        }
    };

    const download = (blob, name) => {
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = name;
        link.click();
        toggle = false;
    };

    const downloadMarkdown = async () => {
        const blob = new Blob(
            [ $text ],
            { type: 'text/plain' }
        );
        download(blob, 'bookdown.md');
    }

    const downloadBookdown = async () => {
        const compressed = compressToArray(JSON.stringify(getData()));
        console.log(compressed);

        const blob = new Blob(
            [ compressed ],
            { type: 'octet/stream' }
        );
        download(blob, 'save.bkd');
    };

    const downloadPDF = async () => {
        const body = compressToString(JSON.stringify(getData()));

        const res = await fetch(
            `${window.location.origin}/api/pdf`,
            {
                method: 'POST',
                headers: { 'Accept': 'application/pdf' },
                body,
            }
        );

        const data = await res.arrayBuffer();

        const blob = new Blob(
            [ data ],
            { type: 'application/pdf' }
        );

        download(blob, 'document.pdf');
    }
</script>

<Dropdown
    {toggle}
>
    <div slot="button">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"/>
        </svg>
    </div>
    <div slot="content">
        <DropdownItem
            onClick={downloadMarkdown}
            text="Export to Markdown"
        >
            <span slot="icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
                </svg>
            </span>
        </DropdownItem>
        <DropdownItem
            onClick={downloadBookdown}
            text="Export to Bookdown"
        >
            <span slot="icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clip-rule="evenodd"/>
                </svg>
            </span>
        </DropdownItem>
        <DropdownItem
            onClick={downloadPDF}
            text="Export to PDF"
        >
            <span slot="icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 5C2 3.89543 2.89543 3 4 3H12C13.1046 3 14 3.89543 14 5V15C14 16.1046 14.8954 17 16 17H4C2.89543 17 2 16.1046 2 15V5ZM5 6H11V10H5V6ZM11 12H5V14H11V12Z"/>
                    <path d="M15 7H16C17.1046 7 18 7.89543 18 9V14.5C18 15.3284 17.3284 16 16.5 16C15.6716 16 15 15.3284 15 14.5V7Z"/>
                </svg>
            </span>
        </DropdownItem>
    </div>
</Dropdown>
