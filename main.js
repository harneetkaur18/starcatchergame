const starArray=["https://margaret.codewizardshq.com/js_projects_for_kids/star_catcher/star-yellow.png","https://margaret.codewizardshq.com/js_projects_for_kids/star_catcher/star-blue.png","https://margaret.codewizardshq.com/js_projects_for_kids/star_catcher/star-purple.png"]
const scoreId= document.getElementById("score");
var score=0;
const stars=document.querySelector("#star");

function movestar(){
    stars.style.top=Math.random()*500 + "px";
    stars.style.left=Math.random()*1300 + "px";

    var ranom=Math.floor(Math.random()*3)
    stars.src=starArray[ranom]
}
//setInterval(movestar, 1000)

function addScore(){
    score=score+1;
    scoreId.innerText="Score: "+score;
}
stars.addEventListener("click", addScore);

function gameover(){
    document.querySelector("#gameover").style.display="block"
    stars.style.display="none"
    document.getElementById("instruction").style.display="none";
}

function winner(){
    document.getElementById("winn").style.display="block";
    document.getElementById("instruction").style.display="none";
}
setTimeout(function (){
    if(score>=10){
        winner()
    }
    else{
        gameover()
    }
}, 20000)