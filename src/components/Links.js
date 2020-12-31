import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { DropdownButton,Button } from 'react-bootstrap';
import {getLinks} from '../api/'

const BASE_URL = 'api'
const url = `${BASE_URL}/links`

// const dummyData = [
//     {
//         url: 'www.google.com',
//         comment: 'whedhjegd',
//         clickCount: 1,
//     },
//     {
//         url: 'www.google234.com',
//         comment: 'whedhjegd',
//         clickCount: 1,
//     },
//     {
//         url: 'www.google456.com',
//         comment: 'whedhjegd',
//         clickCount: 1,
//     },
// ]

const Links = () => {
    const [linksList, setLinksLists] = useState([]);


useEffect(() => {
    async function fetchData() {
    const allLinks = await getLinks()
    setLinksLists(allLinks)
    }
    fetchData();
}, [linksList])

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
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        {linksList.map((linkList, index) => {
                            const {link, clickcount, comment, tags, created} = linkList;
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
                                    <th>
                                        <select className="linksDropDown">
                                            <option value="Delete" selected>Delete</option>
                                            <option value="Edit">Edit</option>
                                        </select>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        {link}
                                    </td>
                                    <td>
                                        {clickcount}
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
