const JokeAPI = new Joke;

function showCurrentTime(){
    const UIspan = document.getElementById('clock');
    const today = new Date();

    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();


    const clockTime = `${hours}:${minutes}:${seconds}!`;

    UIspan.innerText = clockTime;
}
showCurrentTime();

const onesecond = 1000;
setInterval(showCurrentTime,onesecond);

function showImage(){
    const today = new Date();

    const hours = today.getHours();
    const morning = document.getElementById('morning');
    const afternoon = document.getElementById('afternoon');
    const evening = document.getElementById('evening');

    if(hours >= 0 && hours <= 12){
        morning.style.display = 'inline'
        afternoon.style.display = 'none'
        evening.style.display = 'none'
    }
    if(hours > 12 && hours < 18){
        morning.style.display = 'none'
        afternoon.style.display = 'inline'
        evening.style.display = 'none'
    }
    if(hours >= 18 && hours <= 23){
        morning.style.display = 'none'
        afternoon.style.display = 'none'
        evening.style.display = 'inline'
    }
}
showImage();

document.getElementById('year').innerText = new Date().getFullYear();
const btnJoke = document.getElementById('btnJoke');
const UIjoke = document.getElementById('joke');
UIjoke.style.display = 'none';

btnJoke.addEventListener('click', ()=>{
    JokeAPI.getJoke()
        .then(joke=>{
            if(joke.message === 'Not Found'){
                alert('Try Again');
            }else{
                document.getElementById('joke').style.display = 'block';
                document.getElementById('joke').innerText=joke.value;
            }
        })
});

