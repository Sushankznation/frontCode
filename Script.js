function run (){
    const htmlCode = document.getElementById('html-code').value;
    const cssCode = "<style>" + document.getElementById('css-code').value + "</style> ";
    const jsCode = document.getElementById('js-code').value;
    const output = document.getElementById('output');
    // console.log(htmlCode,cssCode,jsCode)
    output.contentDocument.body.innerHTML = htmlCode+cssCode;
    output.contentWindow.eval(jsCode);
}