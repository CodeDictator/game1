let rock=document.querySelector("#rock")
let paper=document.querySelector("#paper")
let scissor=document.querySelector("#scissor")
let resultFirst = document.querySelector("#first")
let resultSecond = document.querySelector("#second")
let userChoice = document.querySelector("#user-choice")
let comChoice = document.querySelector("#com-choice")
let reset = document.querySelector("#reset")
console.log(resultSecond);

reset.addEventListener("click", function(){
    comChoice.innerText = "Computer: ";
    userChoice.innerText = "You: ";
})

function randomGenerator()
{
    const randomNumber = Math.random()*3;
    return Math.floor(randomNumber)+1;
}

rock.addEventListener("click", function(event){
    const rand = randomGenerator();
    let text = document.createTextNode("ROCK");
    if(rand === 1)
    {
        comChoice.innerText = "Computer: Rock"
        resultFirst.textContent = "OHH!!";
        resultSecond.textContent ="Its Draw....";
        userChoice.innerText = "You: Rock"
    }
    else if(rand=== 2)
    {
        comChoice.innerText = "Computer: Paper"
        resultFirst.textContent = "SORRY";
        resultSecond.textContent ="YOU LOSS....";
        userChoice.innerText = "You: Rock"
    }
    else{
        comChoice.innerText = "Computer: Scissor"
        userChoice.innerText = "You: Rock"
        resultFirst.textContent = "CONGRATULATION";
        resultSecond.textContent ="YOU WON...."; 
    }
}
)
paper.addEventListener("click", function(event){
    const rand = randomGenerator();
    if(rand === 1)
    {
        comChoice.innerText = "Computer: Rock"
        userChoice.innerText = "You: Paper"
        resultFirst.textContent = "CONGRATULATION";
        resultSecond.textContent ="YOU WON....";
    }
    else if(rand=== 2)
    {
        comChoice.innerText = "Computer: Paper"
        userChoice.innerText = "You: Paper"
        resultFirst.textContent = "OHH!!";
        resultSecond.textContent ="Its Draw...."; 
    }
    else{
        comChoice.innerText = "Computer: Scissor"
        userChoice.innerText = "You: Paper"
        resultFirst.textContent = "SORRY";
        resultSecond.textContent ="YOU LOSS....";
    }
}
)
scissor.addEventListener("click", function(event){
    const rand = randomGenerator();
    if(rand === 1)
    {
        comChoice.innerText = "Computer: Rock"
        userChoice.innerText = "You: Scissor"
        resultFirst.textContent = "SORRY";
        resultSecond.textContent ="YOU LOSS....";
    }
    else if(rand=== 2)
    {
        comChoice.innerText = "Computer: Paper"
        userChoice.innerText = "You: Scissor"
        resultFirst.textContent = "CONGRATULATION";
        resultSecond.textContent ="YOU WON...."; 
    }
    else{
        comChoice.innerText = "Computer: Scissor"
        userChoice.innerText = "You: Scissor"
        resultFirst.textContent = "OHH!!";
        resultSecond.textContent ="Its Draw....";
    }
}
)   