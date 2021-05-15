class Joke{
    async getJoke(){
        const joke = await fetch(`https://api.chucknorris.io/jokes/random`);
        const jokeResponse = await joke.json();
    
        return jokeResponse;
    }
}