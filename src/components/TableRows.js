import React from 'react'
import {useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {getLinks, deleteLink} from "../api/index"

const TableRows = (props) => {
    const [linkLists, setLinksLists] = useState([]);
    const [edit, setEdit ] = useState(null)
    useEffect( () => {
        setLinksLists([])
        getLinks().then(setLinksLists, console.error)
      }, []);
    return linkLists.map(({ comment, link, id, clickcount, tags,  dateCreated }) => {
        return (
            <tr key={id}>
                <td><Link>{link}</Link></td>
                <td>{clickcount} </td>
                <td>{comment}</td>
                 <td>{tags.map((tag)=>{
                     return <tr>
                     <td>{tag.tag}</td>
                     </tr>
                 })}</td>
                <td>{dateCreated}</td>

                {edit === link.id? <CreateNewLink linkId={link.id} link = {link.link} comment={link.comment} tag = {link.tags} /> : null}
                
                <td  className='opration'>
                    <button style={{
                        "display" : "inline-block",
                        "margin":"5px",
                        "width":"60px"
                    }} className='button'  onClick = {()=>{
                        console.log('deleting this ', link.id)
          
                        deleteLink(link.id)
          
                      } }>Delete</button>
                    <button onClick = {()=>{
                        console.log('tis id is for editing', link.id)
                        setEdit(link.id) }}  className='button' >Update</button>
                </td>
            </tr>
        )
    })
  }
export default TableRows