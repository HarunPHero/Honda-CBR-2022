//btn1
const block = "block";
const none = "none";
const moreText1 = document.getElementById('btn1');
moreText1.addEventListener('click',function(){
    document.getElementById('more1').style.display = block
    document.getElementById('less-btn1').style.display = block
    document.getElementById('btn1').style.display = none
    
})
const readLess1 = document.getElementById('less-btn1').addEventListener('click', function(){
    document.getElementById('more1').style.display = "none"
    document.getElementById('less-btn1').style.display = "none"
    document.getElementById('btn1').style.display = "block"
})

//btn2
const moreText2 = document.getElementById('btn2');
moreText2.addEventListener('click', function(){
    document.getElementById('more2').style.display = "block"
    document.getElementById('less-btn2').style.display = "block"
    document.getElementById('btn2').style.display = "none"
})
const readLess2 = document.getElementById('less-btn2').addEventListener('click', function(){
    document.getElementById('more2').style.display = "none";
    document.getElementById('less-btn2').style.display = "none";
    document.getElementById('btn2').style.display = "block"
})

//btn3
const moreText3 = document.getElementById('btn3');
moreText3.addEventListener('click', function(){
    document.getElementById('more3').style.display = "block"
    document.getElementById('less-btn3').style.display = "block"
    document.getElementById('btn3').style.display = "none"
})
const readLess3 = document.getElementById('less-btn3').addEventListener('click', function(){
    document.getElementById('more3').style.display = "none";
    document.getElementById('less-btn3').style.display = "none";
    document.getElementById('btn3').style.display = "block"
})
    

