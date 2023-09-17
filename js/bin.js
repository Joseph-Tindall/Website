function generateBinary()
{
    let element = document.getElementById("bin");
    let str = "";
    
    for (var i = 0; i < 35000; i++)
    {
        str += Math.round(Math.random());
    }

    element.innerHTML = str;
}
window.addEventListener("load",function() { generateBinary() });

function updateBinary()
{
    let element = document.getElementById("bin");
    let str = element.innerHTML;
    
    n = str.length;
    r = Math.floor(Math.random() * n)

    element.innerHTML = str.substring(0, r) + Math.round(Math.random()) + str.substring(r + 1);
}
window.addEventListener("load",function() { setInterval('updateBinary()', 0.25) });