import React from 'react'
import Searchbar from './Searchbar'
import Links from './Links'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <div>
            <h1>The Great Linkerator</h1>
            <h2>The ONLY solution for indexing urls</h2>
            <Searchbar />
            <Links />
        </div>
    )
}

export default App
