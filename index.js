let score=[0,0,0,0,0]
const displayScreen=document.getElementById("selected-score")
const flipperty=document.getElementById("thankyou-page")
const flipperrt=document.getElementById("rating-page")

document.getElementById("s1").addEventListener("click",function(){
    for(let i=0;i<score.length;i++){
        score[i]=0
    }
    score[0]=1
    document.getElementById("s1").style.backgroundColor="hsl(25, 97%, 53%)"
    document.getElementById("s1").style.color="white"
    console.log("1 is clicked")
})
document.getElementById("s2").addEventListener("click",function(){
    for(let i=0;i<score.length;i++){
        score[i]=0
    }
    score[1]=1
    document.getElementById("s2").style.backgroundColor="hsl(25, 97%, 53%)"
    document.getElementById("s2").style.color="white"
    console.log("2 is clicked")
})
document.getElementById("s3").addEventListener("click",function(){
    for(let i=0;i<score.length;i++){
        score[i]=0
    }
    score[2]=1
    document.getElementById("s3").style.backgroundColor="hsl(25, 97%, 53%)"
    document.getElementById("s3").style.color="white"
    console.log("3 is clicked")
})
document.getElementById("s4").addEventListener("click",function(){
    for(let i=0;i<score.length;i++){
        score[i]=0
    }
    score[3]=1
    document.getElementById("s4").style.backgroundColor="hsl(25, 97%, 53%)"
    document.getElementById("s4").style.color="white"
    console.log("4 is clicked")
})
document.getElementById("s5").addEventListener("click",function(){
    for(let i=0;i<score.length;i++){
        score[i]=0
    }
    score[4]=1
    document.getElementById("s5").style.backgroundColor="hsl(25, 97%, 53%)"
    document.getElementById("s5").style.color="white"
    console.log("5 is clicked")
})
document.getElementById("submit-btn").addEventListener("click", function submitted(){
    let rating = 0
    for(let i=0;i<score.length;i++){
        if(score[i]===1){
            rating=i+1;
            break;
        }
    }
    console.log(rating)
    flipperrt.style.display="none"
    flipperty.style.display="flex"
    displayScreen.textContent=`You selected ${rating} out of 5`

})
function corrector(){
    for(let i=0;i<score.length;i++){
        if(score[i]===0){
            
        }
    }
    document.querySelector("#thankyou-page").setAttribute("style","background-color:hsl(216, 8%, 25%);color:hsl(217, 12%, 63%);")

}