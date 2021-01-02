import React, { useEffect, useState } from 'react'
import Searchbar from './Searchbar'
import Links from './Links'
import 'bootstrap/dist/css/bootstrap.min.css'
import { getLinks } from '../api/index'
import CreateNewLink from "./CreateNewLink"
import {deleteLink} from "../api/index"
import {editLink} from "../api/index"
import { getAllTags } from '../../data_layer'



const App = () => {
  const [linkLists, setLinksLists] = useState([])
  const [edit, setEdit ] = useState(null)
  


  useEffect(async () => {
    setLinksLists([])
    getLinks().then(setLinksLists, console.error)
  }, [])

  return (
    <div>
    <CreateNewLink />
   
      {linkLists.map((link, index) => {
        return (
          <div key={index}>
            <h1>URL : {link.link}</h1>
            <p>Comment : {link.comment}</p>
            <p>ClickCoun : {link.clickcount}</p>
              <p>tags: {link.tags.map((tag)=>{
                return <h1>{tag.tag}</h1>
              })
                }</p>

            {edit === link.id? <CreateNewLink linkId={link.id} link = {link.link} comment={link.comment} /> : null}
            <button onClick = {()=>{
              console.log('deleting this ', link.id)

              deleteLink(link.id)

            }}>delete</button>
            <button onClick = {()=>{
              console.log('tis id is for editing', link.id)
              setEdit(link.id)
             

            }}>edit</button>
          </div>
        )
      })}
      <h1>The Great Linkerator</h1>
      <h2>The ONLY solution for indexing urls 12344</h2>
      <Searchbar />
      <Links />
    </div>
  )
}

export default App
