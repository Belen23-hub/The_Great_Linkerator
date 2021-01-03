import React from "react";
import {
  Checkbox,
  TextField,
  Button,
  TextareaAutosize,
  Container,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import {createLink, editLink}  from "../api/index";







function CreateNewLink  (props) {
    const {linkId} = props
  const [link, setLink] = useState("");
  const [comment, setComment] = useState("");
  const [tag, setTag] = useState("");
  useEffect(() => {
    setLink(props.link || "");
    setComment(props.comment || "");
    setTag(props.tag || "");
  }, [linkId]);

  const submitHandler = () =>{
    createLink({
        link,
        comment,
        tag
    });

}

const editHandler = () => {

    editLink({
        link, 
        comment
    }, linkId)

}

   



  

  return (
    <div>
      <form
        className="createLinkForm"
        onSubmit={async (event) => {
          event.preventDefault();
          
        
        }}
      >
        <label>URL</label>
        <TextField
          type="text"
          value={link}
          placeholder="Link here"
          onChange={(event) => {
            setLink(event.target.value);
          }}
        />
        <label>Comment</label>
        <TextField
          type="text"
          value={comment}
          placeholder="Comment here"
          onChange={(event) => {
            setComment(event.target.value);
          }}
        />
          <label>Tags</label>
        <TextField
          type="text"
          value={tag}
          placeholder="Comment here"
          onChange={(event) => {
            setTag(event.target.value);
          }}
        />
        <div>
        {linkId ? <button onClick={()=>editHandler()}>Update</button> : <button onClick={()=>{
            submitHandler()
          }}>Submit</button>}
        </div>
      </form>
    </div>
  );
};
export default CreateNewLink;
