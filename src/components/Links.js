import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import DropdownButton from 'react-bootstrap/Button'
import CreateNewLink from './CreateNewLink'

const Links = () => {
  const [addLink, setAddLink] = useState(false);
  
  return (
    <>
      <h3>Links</h3>
 
      <div className="links">
        <h3 className="linkSort">Sort by Click Count:</h3>
        <form>
          <select className="linksDropDown">
            <option value="Highest" selected>
              Highest
            </option>
            <option value="Lowest">Lowest</option>
          </select>
        </form>
        <Button  className="linkButton" variant="primary">
          Add Link
        </Button>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>URL</th>
                  <th>Click Count</th>
                  <th>Comment</th>
                  <th>Tags</th>
                  <th>Created</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>https://linkerator-2007-lsu-pt.herokuapp.com/create</td>
                  <td>11</td>
                  <td>Recursive Linkerator</td>
                  <td>None</td>
                  <td>12/23/2020</td>
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
