export const defaultTheme = 'modern';

export const defaultThemes = {
    github: {
        classes: {
            blockquote: `
                text-gray-600
                border-l-4
                border-gray-200
                pl-4
                my-4
                first:mt-0
            `,
            checkbox: `
                form-checkbox
                mr-1
                mb-1
            `,
            code: `
                block
                p-4
                rounded
                bg-gray-50
                text-sm
                font-medium
                leading-relaxed
                break-words
                whitespace-pre-wrap
                subpixel-antialiased
            `,
            codespan: `
                inline
                px-1
                py-0.5
                rounded
                bg-gray-50
                text-sm-em
                font-medium
                break-words
                whitespace-pre-wrap
                subpixel-antialiased
            `,
            del: ``,
            em: ``,
            hr: `
                border-2
                border-gray-200
                my-4
            `,
            h1: `
                text-4xl
                font-semibold
                pb-1
                border-b
                border-gray-200
                mt-6
                mb-4
                first:mt-0
            `,
            h2: `
                text-2xl
                font-semibold
                pb-1
                border-b
                border-gray-200
                mt-6
                mb-4
                first:mt-0
            `,
            h3: `
                text-xl
                font-semibold
                mt-6
                mb-4
                first:mt-0
            `,
            h4: `
                font-semibold
                mt-6
                mb-4
                first:mt-0
            `,
            h5: `
                text-sm
                font-semibold
                mt-6
                mb-4
                first:mt-0
            `,
            h6: `
                text-sm
                text-gray-600
                font-semibold
                mt-6
                mb-4
                first:mt-0
            `,
            image: `
                inline
                align-baseline
            `,
            li: `
                first:mt-1
            `,
            link: `
                text-blue-700
                hover:underline
            `,
            ol: `
                page-parent:mb-4
                space-y-1
                pl-8
                list-decimal
            `,
            page: `
                bg-white
                text-gray-900
            `,
            paragraph: `
                my-4
                first:mt-0
                li-first:my-0
            `,
            pre: `
                my-4
                first:mt-0
            `,
            ul: `
                page-parent:my-4
                space-y-1
                pl-8
                list-disc
            `,
            strong: ``,
            table: `
                table-auto
                my-4
                first:mt-0
            `,
            td: `
                border
                border-gray-200
                px-4
                py-2
            `,
            th: `
                border
                border-gray-200
                px-4
                py-2
            `,
            tr: `
                even:bg-gray-50
            `,
        },
        styles: {
            blockquote: ``,
            checkbox: ``,
            code: ``,
            codespan: ``,
            del: ``,
            em: ``,
            hr: ``,
            h1: ``,
            h2: ``,
            h3: ``,
            h4: ``,
            h5: ``,
            h6: ``,
            image: ``,
            li: ``,
            link: ``,
            ol: ``,
            page: `
                padding: 25mm;
            `,
            paragraph: ``,
            pre: ``,
            ul: ``,
            strong: ``,
            table: ``,
            td: ``,
            th: ``,
            tr: ``,
        }
    },
    modern: {
        classes: {
            blockquote: `
                text-gray-600
                border-l-4
                border-gray-200
                pl-4
                my-4
                page-parent:my-8
                first:mt-0
            `,
            checkbox: `
                form-checkbox
                mr-1
                mb-1
            `,
            code: `
                block
                p-6
                rounded
                bg-gray-50
                text-sm
                font-medium
                leading-relaxed
                break-words
                whitespace-pre-wrap
                subpixel-antialiased
            `,
            codespan: `
                inline
                px-2
                py-1
                rounded
                bg-gray-50
                text-sm-em
                font-medium
                break-words
                whitespace-pre-wrap
                subpixel-antialiased
            `,
            del: ``,
            em: ``,
            hr: `
                my-8
                border-2
                border-gray-200
            `,
            h1: `
                text-5xl
                font-black
                mt-16
                mb-10
                first:mt-8
            `,
            h2: `
                text-4xl
                font-extrabold
                mt-16
                mb-10
                first:mt-8
            `,
            h3: `
                text-2xl
                font-extrabold
                mt-8
                mb-5
                first:mt-4
            `,
            h4: `
                font-bold
                mt-6
                mb-4
                first:mt-3
            `,
            h5: `
                text-sm
                font-semibold
                mt-6
                mb-4
                first:mt-3
            `,
            h6: `
                text-sm
                text-gray-500
                font-semibold
                mt-6
                mb-4
                first:mt-3
            `,
            image: `
                inline
                align-baseline
            `,
            li: `
                first:mt-2
            `,
            link: `
                font-medium
                underline
                text-gray-500
                hover:text-gray-700
            `,
            ol: `
                page-parent:mb-4
                space-y-2
                pl-8
                list-decimal
            `,
            page: `
                bg-white
                text-gray-900
                leading-relaxed
            `,
            paragraph: `
                my-4
                first:mt-0
                li-first:my-0
            `,
            pre: `
                my-8
                first:mt-0
            `,
            ul: `
                page-parent:my-8
                space-y-2
                pl-8
                list-disc
            `,
            strong: ``,
            table: `
                table-auto
                my-8
                rounded-lg
                shadow
                first:mt-0
            `,
            td: `
                px-6
                py-3
                text-sm
            `,
            th: `
                px-6
                py-3
                uppercase
                text-xs
                font-bold
                tracking-wider
                text-gray-500
                leading-tight
                bg-gray-50
                border-b
                border-gray-200
            `,
            tr: `
                not-last:border-b
                border-gray-200
            `,
        },
        styles: {
            blockquote: ``,
            checkbox: ``,
            code: ``,
            codespan: ``,
            del: ``,
            em: ``,
            hr: ``,
            h1: ``,
            h2: ``,
            h3: ``,
            h4: ``,
            h5: ``,
            h6: ``,
            image: ``,
            li: ``,
            link: ``,
            ol: ``,
            page: `
                padding: 25mm;
            `,
            paragraph: ``,
            pre: ``,
            ul: ``,
            strong: ``,
            table: ``,
            td: ``,
            th: ``,
            tr: ``,
        }
    },
    newspaper: {
        classes: {
            blockquote: `
                text-gray-600
                border-l-4
                border-gray-200
                bg-gray-50
                p-4
                my-4
                page-parent:my-8
                first:mt-0
                italic
            `,
            checkbox: `
                form-checkbox
                text-gray-900
                mr-1
                mb-1
            `,
            code: `
                block
                p-6
                rounded
                bg-gray-50
                text-sm
                font-medium
                leading-relaxed
                break-words
                whitespace-pre-wrap
                subpixel-antialiased
            `,
            codespan: `
                inline
                px-2
                py-1
                rounded
                bg-gray-50
                text-sm-em
                font-medium
                break-words
                whitespace-pre-wrap
                subpixel-antialiased
            `,
            del: ``,
            em: ``,
            hr: `
                my-4
                border-t
                border-gray-900
            `,
            h1: `
                text-5xl
                mt-16
                mb-10
                first:mt-8
            `,
            h2: `
                text-4xl
                mt-16
                mb-10
                first:mt-8
            `,
            h3: `
                text-2xl
                mt-8
                mb-5
                first:mt-4
            `,
            h4: `
                mt-6
                mb-4
                first:mt-3
            `,
            h5: `
                text-sm
                font-semibold
                mt-6
                mb-4
                first:mt-3
            `,
            h6: `
                text-sm
                text-gray-500
                font-semibold
                mt-6
                mb-4
                first:mt-3
            `,
            image: `
                inline
                align-baseline
            `,
            li: `
                first:mt-2
            `,
            link: `
                font-bold
                underline
                hover:text-gray-700
            `,
            ol: `
                page-parent:mb-4
                space-y-2
                pl-8
                list-decimal
            `,
            page: `
                bg-white
                text-gray-900
                font-serif
                leading-snug
            `,
            paragraph: `
                my-4
                first:mt-0
                last:mb-0
                li-first:my-0
            `,
            pre: `
                my-8
                first:mt-0
            `,
            ul: `
                page-parent:my-8
                space-y-2
                pl-8
                list-disc
            `,
            strong: ``,
            table: `
                table-auto
                border-2
                border-gray-900
                border-collapse
                my-8
                first:mt-0
            `,
            td: `
                border
                border-gray-600
                px-6
                py-3
            `,
            th: `
                border
                border-gray-600
                px-6
                py-3
            `,
            tr: `
            `,
        },
        styles: {
            blockquote: ``,
            checkbox: ``,
            code: ``,
            codespan: ``,
            del: ``,
            em: ``,
            hr: ``,
            h1: ``,
            h2: ``,
            h3: ``,
            h4: ``,
            h5: ``,
            h6: ``,
            image: ``,
            li: ``,
            link: ``,
            ol: ``,
            page: `
                padding: 25mm;
            `,
            paragraph: ``,
            pre: ``,
            ul: ``,
            strong: ``,
            table: ``,
            td: ``,
            th: ``,
            tr: ``,
        }
    },
};
