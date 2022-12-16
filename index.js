let meme= document.getElementById("meme");
let title= document.getElementById("title");
let getMemeBtn= document.getElementById("get-meme-btn");

const likeBtn=document.querySelector(".like-btn");
const likeIcon=document.querySelector("#icon");
let count =document.querySelector("#count");

//Another click eventlistener
let clicked= false

likeBtn.addEventListener("click", ()=>{
    //console.log("hello")
    if (!clicked){
        clicked= true;
        likeIcon.innerHTML='<i class="fa-solid fa-heart"></i>'
        count.textContent++;
    }
    else{
        clicked= false;
        likeIcon.innerHTML='<i class="fa-regular fa-heart"></i>'
        count.textContent++;
    }
})

function myfunction(){
    document.getElementById("get-meme-btn")
    console.log ("Moused over!")
}


// API URL retrival

let url = "https://meme-api.com/gimme/";

// Array of subreddits

let subreddits=["catmemes","wholesomemes", "dogmemes", "me_irl"];

//function to get  Random Meme
let getMeme= () => {
    //choose a random subreddit from the subreddits array
    let randomSubreddit= subreddits[Math.floor(Math.random()
         * subreddits.length)];


       //fetch data from API
       fetch(url+randomSubreddit).then(
        resp=>resp.json())
        .then (data=>{
            // Display Meme image and title only after the image loads

            let memeImg= new Image();
            memeImg.onload= () => {
                meme.src= data.url;
                title.innerHTML = data.title;
            }
            memeImg.src = data.url;
        });
       

};

// call the getMeme()on button click and on window load

getMemeBtn.addEventListener("click", getMeme);
getMemeBtn.addEventListener("mouseover", myfunction);
window.addEventListener("load", getMeme);
