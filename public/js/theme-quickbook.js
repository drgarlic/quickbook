const css = `
.ace_heading,
.ace_strong {
    font-weight: bold;
    opacity: 0.8;
}

.ace_blockquote {
    font-style: italic;
}

.ace_comment,
.ace_emphasis {
    font-style: italic;
    opacity: 0.8;
}

.ace_markup,
.ace_tag,
.ace_operator,
.ace_constant,
.ace_function,
.ace_url {
    opacity: 0.6;
}

.ace_variable,
.ace_string {
    opacity: 0.8;
}

.ace_selection {
    background: #6b7280;
    opacity: 0.1;
}

.ace_active-line {
    background: #6b7280;
    opacity: 0.05;
}

.ace_cursor {
    color: #6b7280;
}

.ace_hidden-cursors .ace_cursor {
    opacity: 0.4 !important;
}

.ace_indent-guide {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWMQERFpYLC1tf0PAAgOAnPnhxyiAAAAAElFTkSuQmCC) right repeat-y;
}

/* --- */

.ace-quickbook .ace_gutter {
    /* background: #232323; */
    /* color: #E2E2E2; */
}

.ace-quickbook .ace_print-margin {
    /* width: 1px; */
    /* background: #232323; */
}

.ace-quickbook {
    /* background-color: #141414; */
    /* color: #F8F8F8; */
}

.ace-quickbook .ace_cursor {
    /* color: currentColor; */
    /* opacity: 0.6; */
}

.ace-quickbook .ace_marker-layer .ace_selection {
    /* background: rgba(221, 240, 255, 0.20); */
}

.ace-quickbook.ace_multiselect .ace_selection.ace_start {
    /* box-shadow: 0 0 3px 0px #141414; */
}

.ace-quickbook .ace_marker-layer .ace_step {
    /* background: rgb(102, 82, 0); */
}

.ace-quickbook .ace_marker-layer .ace_bracket {
    margin: -1px 0 0 -1px;
    border: 1px solid rgba(255, 255, 255, 0.25);
}

.ace-quickbook .ace_marker-layer .ace_active-line {
    /* background: rgba(255, 255, 255, 0.031); */
}

.ace-quickbook .ace_gutter-active-line {
    /* background-color: rgba(255, 255, 255, 0.031); */
}

.ace-quickbook .ace_marker-layer .ace_selected-word {
    border: 1px solid rgba(221, 240, 255, 0.20);
}

.ace-quickbook .ace_invisible {
    /* color: rgba(255, 255, 255, 0.25); */
}

.ace-quickbook .ace_keyword,
.ace-quickbook .ace_meta {
    /* color: #CDA869; */
}

.ace-quickbook .ace_constant,
.ace-quickbook .ace_constant.ace_character,
.ace-quickbook .ace_constant.ace_character.ace_escape,
.ace-quickbook .ace_constant.ace_other,
.ace-quickbook .ace_support.ace_constant {
    /* color: #CF6A4C; */
}

.ace-quickbook .ace_invalid.ace_illegal {
    /* color: #F8F8F8; */
    /* background-color: rgba(86, 45, 86, 0.75); */
}

.ace-quickbook .ace_invalid.ace_deprecated {
    /* text-decoration: underline; */
    /* font-style: italic; */
    /* color: #D2A8A1; */
}

.ace-quickbook .ace_support {
    /* color: #9B859D; */
}

.ace-quickbook .ace_fold {
    /* background-color: #AC885B; */
    /* border-color: #F8F8F8; */
}

.ace-quickbook .ace_support.ace_function {
    /* color: #DAD085; */
}

.ace-quickbook .ace_list,
.ace-quickbook .ace_markup.ace_list,
.ace-quickbook .ace_storage {
    /* color: #F9EE98; */
}

.ace-quickbook .ace_entity.ace_name.ace_function,
.ace-quickbook .ace_variable {
    /* color: #AC885B; */
}

.ace-quickbook .ace_string {
    /* color: #8F9D6A; */
}
.ace-quickbook .ace_string.ace_regexp {
    /* color: #E9C062; */
}

.ace-quickbook .ace_comment {
    /* font-style: italic; */
    /* color: #5F5A60; */
}

.ace-quickbook .ace_variable {
    /* color: #7587A6; */
}

.ace-quickbook .ace_xml-pe {
    /* color: #494949; */
}
`;

ace.define(
    "ace/theme/quickbook",
    [
        "require",
        "exports",
        "module",
        "ace/lib/dom",
    ], function(acequire, exports, module) {

        exports.isDark = false;
        exports.cssClass = "ace-quickbook";
        exports.cssText = css;

        var dom = acequire("../lib/dom");
        dom.importCssString(exports.cssText, exports.cssClass);
    }
);
