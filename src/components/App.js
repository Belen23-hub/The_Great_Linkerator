import {getLinks} from "../api/index"
import React from "react";
import {useEffect, useState} from "react"
import Header from "./Header"
import '../App.css'
import LinkTable from "./LinkTable";
import TableRows  from "./TableRows"
import SearchBar from "./SearchBar";
import CreateNewLink from "./CreateNewLink";
const App = (props) => {
  const [searchTerm, setSearchTerm] = useState([]);
  const  [searchType, setSearchType] = useState([])
  
  return  <div>
  <Header />
 <SearchBar searchType={searchType}
   setSearchType={setSearchType}
   searchTerm={searchTerm}
   setSearchTerm={setSearchTerm}
 />
      <div>
      <h1 id='title'>React Table</h1>
            <table id='employee'>
                <thead>
                    <tr><LinkTable/></tr>
                </thead>
                <tbody>
                <TableRows/>
                </tbody>
            </table>
      </div>
     
      </div>
};
export default App;
