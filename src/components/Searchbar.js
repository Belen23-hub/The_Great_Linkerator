import React from 'react'



const Searchbar = () => {
    return (
        <>
            <div>
                <h3>Enter a search term</h3>
            </div>
            <div className="searchBar">
                <div className="searchBardiv">
                    <input
                    type="text" placeholder="Search" className="searchBarInput">
                    </input>
                </div>
                    <form>
                        <select className ="searchBarDropdown">
                            <option value = "Link" selected>Link</option>
                            <option value = "Tag">Tag</option>
                        </select>
                    </form>
            </div>
        </>
    )
}

export default Searchbar
