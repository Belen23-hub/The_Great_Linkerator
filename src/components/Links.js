import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { DropdownButton,Button } from 'react-bootstrap';


const Links = () => {
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
                        <table className="table table-striped">
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
                                        https://linkerator-2007-lsu-pt.herokuapp.com/create
                                    </td>
                                    <td>
                                        11
                                    </td>
                                    <td>
                                        Recursive Linkerator
                                    </td>
                                    <td>
                                        None
                                    </td>
                                    <td>
                                        12/23/2020
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>   
            </div>
    </>
    )
}

export default Links
