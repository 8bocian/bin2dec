window.addEventListener('load', function() {
    setTimeout(function() {
        document.body.style.transform = 'scale(1)';
    }, 10);
});
window.onload = function(){
    const field = document.getElementById("bits");
    const result = document.getElementById("result");

    for(i=0; i<12; i++){
        var bit = document.createElement("div");
        bit.className="bit";
        bit.innerHTML=0;
        field.appendChild(bit);
        bit.addEventListener("click", function(){
            this.innerHTML = (this.innerHTML==0) ? 1 : 0;
            var decimal = parseInt(field.innerText, 2);
            result.innerHTML = decimal;
        });
    }
}