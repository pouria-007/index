document.getElementById("run").addEventListener("click", () => {
    var xhr = new XMLHttpRequest();
    var Mycode = document.getElementById("input").value;
    xhr.open('POST', 'https://pooriya007.pythonanywhere.com/?code=' + Mycode);
    //xhr.setRequestHeader('code', 'n = 5\nwhile n > 0:\n n -= 1\n print(n)');
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