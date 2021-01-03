import React from 'react'
front+backend
import {SimpleListMenu, MenuItem,  Input,
InputLabel,Select} from "@material-ui/core";
import {useEffect, useState} from "react"
const SearchBar = (props) => {
    const [searchType, setSearchType] = useState("");
    const search_Type = ["Link", "Tags"];
    const [searchTerm, setSearchTerm] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        setSearchType(event.target.value);
      };
    return  <div
    style={{
      paddingTop: "150px",
      "display" : "flex",
      "justifyContent": "center"
    }}
  >
    <input
      className="search-bar"
      style={{
        "display": "block",
        "width" : "50%",
        "height": "50px",
        "margin": "5px",
        "alignContent": "center"
      }}
      type="text"
      value={searchTerm}
      onChange={(event) => setSearchTerm(event.target.value)}
      placeholder="Search Here"
    />
       <div>
      <InputLabel className="contact-form-label">Contact Type</InputLabel>
      <Select value={searchType} onChange={handleSubmit}>
        {search_Type.map((searchType, idx) => {
          return (
            <MenuItem value={searchType} key={idx}>
        
              {searchType}
            </MenuItem>
          );
        })}
      </Select>
    </div>
    </div>
}
export default SearchBar;

