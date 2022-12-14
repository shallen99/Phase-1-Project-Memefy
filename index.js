let meme= document.getElementById("meme");
let title= document.getElementById("title");
let getMemeBtn= document.getElementById("get-meme-btn");

// API URL retrival

let url = "https://meme-api.com/gimme/";

// Array of subreddits

let subreddits=["catmemes","wholesomemes", "dogmemes", "me_irl"];

//function to get  Random Memes

let getMeme= () => {
    //choose a random subreddit from the subreddits array
    let randomSubreddit= subreddits[Math.floor(Math.random
        () * subreddits.length)];

       //fetch data from API
       fetch(url+randomSubreddit).then(
        resp=>resp.json())
        .then (data=>{
            console.log(data);

        // Display Meme image and title only after the image loads

            let memeImg= new Image();
            memeImg.onload= () =>{
                meme.src=data.url;
                title.innerHTML = data.title;
            }
        });
       

};

// call the getMeme() on button click and window load
getMemeBtn.addEventListener("click", getMeme);
window.addEventListener("load", getMeme);
