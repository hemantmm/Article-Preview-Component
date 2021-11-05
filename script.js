// let images1 =document.querySelector('#images');
// let btn = document.querySelector('#btn1');

// images1.addEventListener('click',()=>{
//     img.src='images/icon-twitter.svg';
// })


var a;
function show_hide(){
    if(a==1)
    {
        document.getElementById("btn2").style.display="inline";
        return a=0;
    }

    else
    {
        document.getElementById("btn2").style.display="none";
        return a=1;
    }
}