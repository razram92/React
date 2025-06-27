import { useState } from "react";
export default function Form(){

    let [fullname , setfullname] = useState("rohit");
    let handlenamechange = (event) =>{
        setfullname(event.target.value);
    }
    return(
        <form>
            <label htmlFor="fullnmae">Full Name</label>
            &nbsp;&nbsp;&nbsp;
          <input placeholder="Username" 
          type="text"
           value={fullname}
           onChange={handlenamechange}
           id="fullname"/>
          &nbsp; &nbsp; 
          <button>Submit</button>
        </form>
    )
}