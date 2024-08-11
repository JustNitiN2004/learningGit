var num=1;
        
        function counter(){
             
            document.getElementById("demo").innerHTML="number of click:"+num;
            num++;

            
        }

//4 pillers of js.

//1.selectin of an element

// document.querySelector("h1").style.color="red"
// document.querySelector("#para1").style.color="red"
// document.querySelector("#para1").style.color="red"


//2.chaning element

// document.querySelector("#para1").innerHTML="this is update"

//3.change in css

var a=document.querySelector("h1");
// console.log(a)
a.style.color="red";

// document.querySelector("#para1").style.fontSize='44px';

//4.eventListener

a.addEventListener("click",function(){
    console.log("hiii")
})

var bulb=document.querySelector("#bulb")
var btn=document.querySelector("#btn")
var flage=0
btn.addEventListener("click",function(){
    if(flage==0){
        bulb.style.backgroundColor="yellow"
        flage=1
    }
    else{
        bulb.style.backgroundColor="white"
        flage=0
    }

})

var para=document.querySelector("#para1")
// para.textContent="bye"
para.addEventListener("click",
    console.log("yuo")
)
setTimeout(function(){
    para.style.color="red"
}, 3000);


