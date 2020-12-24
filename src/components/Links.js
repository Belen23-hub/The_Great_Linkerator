import React from 'react'

const Links = () => {
    return (
        <div>
           <h3>Links</h3>
            <h3>Sort by Click Count:</h3>
            {/* <dropdown highest-lowest></dropdown> */}
            <button>Add Link</button>
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
        </div>
    )
}

export default Links
