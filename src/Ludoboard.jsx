import { useState } from "react"


export default function Ludoboard() {
   
   
    let [moves , setmoves] = useState({Blue:0 , Red:0 , Black: 0 , Green:0})
    let[arr , setarr] = useState([]);
    let updateblue = () =>{
        setmoves((prevmoves) =>{
            return {...prevmoves , Blue: prevmoves.Blue+1}
        })
        
        setarr([...arr,"blue moves  "]);
    }
    let updatered = () =>{
        setmoves((prevmoves) =>{
            return {...prevmoves , Red: prevmoves.Red+1}
        })
        setarr([...arr,"red  moves  "]);
    }
    let updateblack = () =>{
        setmoves((prevmoves) =>{
            return {...prevmoves , Black: prevmoves.Black+1}
        })
        setarr([...arr,"black moves  "]);
    }
    let updategreen = () =>{
        setmoves((prevmoves) =>{
            return {...prevmoves , Green: prevmoves.Green+1}
        })
        setarr([...arr,"green moves  "]);
    }
     

return(
        <div>
        <p>
        Game begins
         </p>
         <p>
            {arr} 
         </p>
        <div>
            <p>Blue moves = {moves.Blue}</p>
            <button onClick={updateblue} style={{backgroundColor: "blue"}} >+1</button>
            <p>Red moves = {moves.Red}</p>
            <button onClick={updatered} style={{backgroundColor: "red"}}>+1</button>
            <p>Black moves ={moves.Black}</p>
            <button onClick={updateblack} style={{backgroundColor: "black"}}>+1</button>
            <p>Green moves ={moves.Green}</p>
            <button onClick={updategreen} style={{backgroundColor: "green"}}>+1</button>
        </div>
        
        </div>
    )

}

    
