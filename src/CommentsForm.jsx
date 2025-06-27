import { useState } from "react"

export default  function CommentsForm({addnewcomment}){
    let [formdata , setformdata] = useState({
        username:"",
        remarks:"",
        rating: 5
    });

    let  handleinputchange = (event) =>{
           setformdata((currdata) =>{
            return { ...currdata , [event.target.name]: event.target.value}
           });
    };
    let handlesubmit =(event) =>{
        event.preventDefault();
        console.log(formdata);
        addnewcomment(formdata);
        
        setformdata({
        username:"",
        remarks:"",
        rating: 5
    });
    }
    return(
       <div>
        <h2>Drop a comment!</h2>
         <form onSubmit={handlesubmit}>
            <label htmlFor="username">USERNAME</label>&nbsp;&nbsp;&nbsp;
            <input id="username"
             placeholder="username"
              type="text"
               value={formdata.username}
                onChange={handleinputchange}
                name="username"
                ></input>

            <br></br><br></br>
             <label htmlFor="remark">REMARK!</label>&nbsp;&nbsp;&nbsp;
            <textarea id="remark"
             placeholder="Remarks"
              value={formdata.remarks}
               onChange={handleinputchange}
               name="remarks"
               ></textarea>

            <br></br><br></br>
             <label htmlFor="rating">RATING</label>&nbsp;&nbsp;&nbsp;
            <input id="rating"
             placeholder="rating" 
             type="number"
              min={1} max={5} 
              value={formdata.rating} 
              onChange={handleinputchange}
              name="rating"
              ></input>

            <br></br><br></br>

            <button>ADD COMMENT!</button>
        </form>
       </div>
    )
}