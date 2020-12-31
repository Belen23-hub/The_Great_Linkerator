import React, { useEffect, useState } from 'react'
import Searchbar from './Searchbar'
import Links from './Links'
import "../index.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import { getLinks } from '../api/index'
// import CreateNewLink from "./CreateNewLink"
import {deleteLink} from "../api/index"
import {editLink} from "../api/index"


const App = () => {

    // const [linkLists, setLinksLists] = useState([])


    // useEffect(async () => {
    //     setLinksLists([])
    //     getLinks().then(setLinksLists, console.error)
    // }, [])

    return (
        <div>
    
        {/* {linkLists.map((link, index) => {
            return (
            <div key={index}>
                <h1>{link.link}</h1>
                <p>{link.comment}</p>
                <p>{link.clickCount}</p>
                <button onClick = {()=>{

                deleteLink(link.id)

                }}>delete</button>
                <button onClick = {()=>{

                }}>edit</button>
            </div>
        ) */}
        {/* })} */}
        <h1>The Great Linkerator</h1>
        <h2>The ONLY solution for indexing urls</h2>
        <Searchbar />
        {/* <CreateNewLink /> */}
        <Links />
        
    </div>
    )
}

export default App
