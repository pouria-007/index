document.getElementById("run").addEventListener("click", () => {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://pooriya007.pythonanywhere.com/');
    var Mycode = document.getElementById("input").value;
    xhr.setRequestHeader('code', Mycode);
    xhr.setRequestHeader('lang', 'py');
    xhr.send();

    xhr.responseType = 'text';
    xhr.onload = function () {
        if (xhr.readyState === xhr.DONE) {
            if (xhr.status === 200) {
                //document.getElementById("out").innerText = xhr.response;
                document.getElementById("out").innerText = xhr.responseText;
            }
        }
    };
})