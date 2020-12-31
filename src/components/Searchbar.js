import React , {useState, useEffect} from 'react'
import { DropdownButton,Button } from 'react-bootstrap';

const BASE_URL = 'api'
const url = `${BASE_URL}/links`

const Searchbar = () => {
        const [link, setLink] = useState("");

//         const createLink = async () => {
//         const response = await fetch(url);
//         const link = await response.json();
//         setLink(link);
// }

// useEffect(() => {
//     createLink();
// }, [])

        // const createLink = async (body) =>{

        // const {data} = await axios.post(url, body)
        // console.log('this is new link', data);

    return (
        <>
                <form  onSubmit={async (event) => {
                event.preventDefault()
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
                    </input>
                </div>
                    <div>
                        <select className ="searchBarDropdown">
                            <option value = "Link" selected>Link</option>
                            <option value = "Tag">Tag</option>
                        </select>
                    </div>  
                     <Button className="linkButton" variant="primary" onClick={(e)=>{
                    {setLink(e.target.value)}}}>
                    Add Link</Button>{' '}
                </div>
                </form>
        </>
    )
}

export default Searchbar
