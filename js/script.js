
document.querySelector('#iframe').contentDocument.designMode = 'on'
var iframe = document.querySelector('#iframe').contentDocument;
iframe.getElementsByTagName('head')[0].innerHTML=`
<style>
@import url('https://v1.fontapi.ir/css/Estedad');
@import url('https://v1.fontapi.ir/css/Vazir');
@import url('https://v1.fontapi.ir/css/Lalezar');
@import url('https://v1.fontapi.ir/css/VazirCode');
</style>
`



var $ = document;
var Bg_color = $.querySelector('.Bg_color_select');
var color = $.querySelector('.color_select');
var size_select = $.querySelector('.size_select');
var CreateTag = $.querySelector('.CreateTag');
var font_select = $.querySelector('.font_select');


Bg_color.addEventListener('click', (e) => {
    Bg_color.classList.toggle('Bg_color_select_show');
    if (e.target.tagName === 'LI') {
        let color = e.target.style.backgroundColor;
        iframe.execCommand("backColor", true, color);
        Bg_color.querySelector('span').style.backgroundColor = color;
    }
    boxfocus()
})

color.addEventListener('click', (e) => {
    color.classList.toggle('color_select_show');
    if (e.target.tagName === 'LI') {
        let clr = e.target.style.backgroundColor;
        iframe.execCommand("foreColor", true, clr);
        color.querySelector('span').style.color = clr;
    }
    boxfocus()
})

size_select.addEventListener('change', () => {
    iframe.execCommand("fontSize", false, size_select.value);
    boxfocus()
})

font_select.addEventListener('change', () => {
    iframe.execCommand("fontName", false, font_select.value);
    boxfocus()
})

CreateTag.addEventListener('change', () => {
    iframe.execCommand("formatBlock", false, CreateTag.value);
    boxfocus()
})

iframe.addEventListener('keyup', () => {
    var Selection = iframe.getSelection().focusNode.parentNode
    try {
        color.querySelector('span').style.color = Selection.getAttribute('color') ?? '#000';
        Bg_color.querySelector('span').style.backgroundColor = Selection.style.backgroundColor ?? '#fff';
    } catch (error) {console.info(error)}
})







$.querySelector('.strikethrough').addEventListener('click', () => {
    iframe.execCommand("strikethrough", true, null)
    boxfocus()
})
$.querySelector('.redo').addEventListener('click', () => {
    iframe.execCommand("redo", true, null)
    boxfocus()
})
$.querySelector('.undo').addEventListener('click', () => {
    iframe.execCommand("undo", true, null)
    boxfocus()
})
$.querySelector('.list_numbered').addEventListener('click', () => {
    iframe.execCommand("insertOrderedList", true, null)
    boxfocus()
})
$.querySelector('.list_bulleted').addEventListener('click', () => {
    iframe.execCommand("insertUnorderedList", true, null)
    boxfocus()
})
$.querySelector('.bold').addEventListener('click', () => {
    iframe.execCommand("bold")
    boxfocus()
})
$.querySelector('.italic').addEventListener('click', () => {
    iframe.execCommand("italic")
    boxfocus()
})
$.querySelector('.underlined').addEventListener('click', () => {
    iframe.execCommand("underline", true, null)
    boxfocus()
})
$.querySelector('.align_right').addEventListener('click', () => {
    iframe.execCommand("justifyRight")
    boxfocus()
})
$.querySelector('.align_left').addEventListener('click', () => {
    iframe.execCommand("justifyLeft")
    boxfocus()
})
$.querySelector('.align_center').addEventListener('click', () => {
    iframe.execCommand("justifyCenter")
    boxfocus()
})
$.querySelector('.align_justify').addEventListener('click', () => {
    iframe.execCommand("justifyFull")
    boxfocus()
})
$.querySelector('.superscript').addEventListener('click', () => {
    iframe.execCommand("superscript")
    boxfocus()
})
$.querySelector('.subscript').addEventListener('click', () => {
    iframe.execCommand("subscript")
    boxfocus()
})
$.querySelector('.selectAll').addEventListener('click', () => {
    iframe.execCommand("selectAll")
    boxfocus()
})
$.querySelector('.paste').addEventListener('click', () => {
    iframe.execCommand("paste")
    boxfocus()
})
$.querySelector('.copy').addEventListener('click', () => {
    iframe.execCommand("copy")
    boxfocus()
})
$.querySelector('.cut').addEventListener('click', () => {
    iframe.execCommand("cut")
    boxfocus()
})
$.querySelector('.outdent').addEventListener('click', () => {
    iframe.execCommand("outdent")
    boxfocus()
})
$.querySelector('.createLink').addEventListener('click', () => {
    var link = prompt('لینک خود را وارد کنید؟')
    iframe.execCommand("createLink", true, link)
    boxfocus()
})
$.querySelector('.insertImage').addEventListener('click', () => {
    var link = prompt('لینک خود را وارد کنید؟')
    iframe.execCommand("insertImage", true, link)
    boxfocus()
})
$.querySelector('.border_horizontal').addEventListener('click', () => {
    iframe.execCommand("insertHorizontalRule", true, null)
    boxfocus()
})
function boxfocus() {
    iframe.querySelector('body').focus()
}





















