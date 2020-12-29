import React , {useState} from 'react'
import {createLink} from "../api/index"
import { Button } from 'react-bootstrap';

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
        <input  type="text" placeholder="Link" className="searchBarLink" value={link}  onChange={(event) => setLink(event.target.value)} />
        <h2>Comment</h2>
        <div className="comments">
            <input type="text" placeholder="Comment" className="searchBarComment" value={comment} onChange={(event)=>setComment(event.target.value)} type = "text" />
        <Button className="commentButton" onClick={()=>{
            submitHandler()
        }}>Submit</Button>
        </div>
        
        </form>
            
        </div>
    )
}

export default CreateNewLink