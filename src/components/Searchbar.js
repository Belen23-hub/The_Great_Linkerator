import React , {useState, useEffect} from 'react'
import { DropdownButton,Button } from 'react-bootstrap';
import {createLink} from '../api/'

const BASE_URL = 'api'
const url = `${BASE_URL}/links`

const Searchbar = () => {
    const [link, setLink] = useState("");
    const[comment, setComment] = useState("");
    const [isDirty, setIsDirty] = useState(false)


    const submitHandler = () =>{

    createLink({
        link,
        comment
    });
}

    return (
        <>
                <form  onSubmit={async (event) => {
                event.preventDefault()

                setIsDirty(true)

                if ({link} === {link})
                setIsDirty(true)
                return

                }}>
                <h3>Enter a search term</h3>
            <div className="searchBar">
                <div className="searchBardiv">
                    <input
                    type="text" placeholder="Search" className="searchBarInput" 
                    value={link}
                    onChange={(event) => {
                        setLink(event.target.value)
                    }}>
                        {isDirty && {link} === {link} ? (
                            <h4 style={{ color: red}}>Link already exists</h4>
                        ) : null}
                    </input>
                </div>
                <div className="searchBardiv">
                    <input
                    type="text" placeholder="Comments" className="searchBarInput" 
                    value={comment}
                    onChange={(event) => {
                        setComment(event.target.value)
                    }}>
                    </input>
                </div>
                    <div>
                        <select className ="searchBarDropdown">
                            <option value = "Link" selected>Link</option>
                            <option value = "Tag">Tag</option>
                        </select>
                    </div>  
                    <Button className="linkButton" variant="primary" onClick={()=>{
                    {submitHandler()}}}>
                    Submit</Button>{' '}
                </div>
                </form>
        </>
    )
}

export default Searchbar
