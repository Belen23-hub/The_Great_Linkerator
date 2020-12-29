import React , {useState} from 'react'
import {createLink} from "../api/index"

function CreateNewLink() {
    const [link, setLink] = useState("");
    const[comment, setComment] = useState("")

const submitHandler = () =>{
    console.log('going to creatae a new link')
    console.log('this is the function to create a link', createLink)
    createLink({
        link,
        comment
    });

    

}

    return (
        <div className="createNewLink">


        <form onClick={(event)=>{
            event.preventDefault();
           
        }}>


        <h2>Link</h2>
        <input value={link}  onChange={(event) => setLink(event.target.value)} type="text" />
        <h2>Comment</h2>
        <input value={comment} onChange={(event)=>setComment(event.target.value)} type = "text" />
       <button onClick={()=>{
         submitHandler()
       }}>Submit</button>
        
        </form>
            
        </div>
    )
}

export default CreateNewLink
