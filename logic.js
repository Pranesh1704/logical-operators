const A = document.getElementById('A');
const B = document.getElementById('B');
const A1 = document.getElementById('A1');
const B1 = document.getElementById('B1');
const A2 = document.getElementById('A2');
const B2 = document.getElementById('B2');
const A3 = document.getElementById('A3');
const B3 = document.getElementById('B3');
const btn = document.getElementById('btn');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

// let flag=1;

btn.addEventListener('click', function () {
    if (A.checked == true && B.checked === true) {
        alert("TRUE")

    }
    else {
        alert("FALSE");

    }
    location.reload();
})

btn1.addEventListener('click', function () {
    if (A1.checked == false && B1.checked === false) {
        alert("FALSE")

    }
    else {
        alert("TRUE");

    }
    location.reload();
})

btn2.addEventListener('click',function(){
    if(A2.checked==true&&B2.checked==true){
        alert("FALSE");
    }
    else if(A2.checked==false&&B2.checked==false){
        alert("FALSE");
    }
    else{
        alert("TRUE");
    }

    location.reload();
})

btn3.addEventListener('click',function(){
    if(A3.checked==true&&B3.checked==true){
        alert("TRUE");
    }
    else if(A3.checked==false&&B3.checked==false){
        alert("TRUE");
    }
    else{
        alert("FALSE");
    }

    location.reload();
})
