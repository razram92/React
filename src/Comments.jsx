   import { useState } from "react";
   import { useFormik } from "react";
   import "./comments.css"
import CommentsForm from "./CommentsForm";
  export default function Comments(){
    

    let [comments , setcomments] = useState([{
        username:"razram",
        remark: "great job",
        rating: 4
    }]);

    let addnewcomment =(comment) =>{
        setcomments((currcomment) =>
        [...currcomment , comment])
    }

    return(
        <>
        <div>
            <h2>ALL COMMENTS!</h2>
            {comments.map((comments , idx) =>{
                <div className="comment" key={idx}>
                <span>{comments.remark}</span>&nbsp;&nbsp;
                <span>(rating = {comments.rating})</span>&nbsp;&nbsp;
                <p>-{comments.username}</p>
            </div>
            })}
            
        </div>
        <CommentsForm addnewcomment = {addnewcomment}/>
        </>
       
    );
}