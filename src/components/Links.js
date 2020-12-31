
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import { DropdownButton,Button } from 'react-bootstrap';
import axios from 'axios'

const BASE_URL = 'api'
const url = `${BASE_URL}/links`

const linksList = [
    {
        url: 'www.google.com',
        comment: 'whedhjegd',
        clickCount: 1,
    },
    {
        url: 'www.google234.com',
        comment: 'whedhjegd',
        clickCount: 1,
    },
    {
        url: 'www.google456.com',
        comment: 'whedhjegd',
        clickCount: 1,
    },
]

const Links = () => {
    // const [linksList, setLinksLists] = useState([]);

//     const getLinks = async () => {
//     const { data } = await axios.get(url)
//     console.log('data is ', data)
//     return data
// }

    const getLinks = async () => {
        const response = await fetch(url);
        const linksList = await response.json();
        setLinksLists(linksList);
}

// useEffect(() => {
//     setLinksLists([]);
//     getLinks().then(setLinksLists,console.error)
// }, [])

useEffect(() => {
    getLinks();
}, [])

    return (
    <>  
        <h3>Links</h3>  
        <div className="links">
            <h3 className="linkSort">Sort by Click Count:</h3>
            <form>
                <select className="linksDropDown">
                    <option value="Highest" selected>Highest</option>
                    <option value="Lowest">Lowest</option>
                </select>
            </form>
            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                
                {/* <a class="dropdown-item" href="#">Highest</a>
                <a class="dropdown-item" href="#">Lowest</a> */}
            </button>
            <Button className="linkButton" variant="primary">Add Link</Button>{' '}
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        {linksList.map((linkList, index) => {
                            const {url, clickCount, comment, tags, created} = linkList;
                            return (
                                <table className="table table-striped" key={index}>
                            <thead>
                                <tr>
                                    <th>
                                        URL
                                    </th>
                                    <th>
                                        Click Count
                                    </th>
                                    <th>
                                        Comment
                                    </th>
                                    <th>
                                        Tags
                                    </th>
                                    <th>
                                        Created
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        {url}
                                    </td>
                                    <td>
                                        {clickCount}
                                    </td>
                                    <td>
                                        {comment}
                                    </td>
                                    <td>
                                        {tags}
                                    </td>
                                    <td>
                                        {created}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                            )
                        })}
                        
                    </div>
                </div>   
            </div>
    </>
    )
}

export default Links
