import React , {useState, useEffect} from 'react'
import {createLink , editLink } from "../api/index"


function CreateNewLink(props) {
    const {linkId} = props
    const [link, setLink] = useState("");
    const[comment, setComment] = useState("")


    useEffect(()=>{
        setLink(props.link || "");
        setComment(props.comment || "");


    }, [linkId])

const submitHandler = () =>{
   
    createLink({
        link,
        comment
    });

    

}

const editHandler = () => {

    editLink({
        link, 
        comment
    }, linkId)

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
        {linkId ? <button onClick={()=>editHandler()}>Update</button> : <button onClick={()=>{
            submitHandler()
          }}>Submit</button>}
       
        
        </form>
            
        </div>
    )
}

export default CreateNewLink
