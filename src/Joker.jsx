import { useState } from "react";

export default function Joker(){

    const URL = "https://official-joke-api.appspot.com/random_joke";

    let  [joke , setjoke] = useState({});
    const getnewjoke = async() =>{
        let response = await fetch(URL);
        let jsonreponse = await response.json();
        console.log(jsonreponse);
        setjoke({setup : jsonreponse.setup , 
            punchline: jsonreponse.punchline})
    }


    return(
        <div>
            <h3>Joker!</h3>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
            <button onClick={getnewjoke}>NEW JOKE</button>
        </div>
    )
}