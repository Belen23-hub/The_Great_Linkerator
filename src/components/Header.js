import React, {useState} from 'react'
import {AppBar, Toolbar, IconButton,
MenuIcon,Typography,Button} from '@material-ui/core'
// import { flex } from '../../dist/src.e31bb0bc';
import CreateNewLink from "./CreateNewLink"

const Header = () =>{
    const [addLink, setAddLink] = useState(false);
    return <AppBar position="sticky" style={{"backgroundColor" : "#03BB85", "height": "100px"}}>
    {
        addLink ? <CreateNewLink /> : null
    }
    <Toolbar style={{
        "display": "flex",
        "justifyContent" : "space-evenly"
    }}>
      <Typography variant="h6" >
      The Great Linkerator
 
      </Typography>
      <Button  onClick={()=>setAddLink(true)} color="inherit">Add New Link</Button>
    </Toolbar>
  </AppBar>
};
export default Header;