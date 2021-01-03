
import React from 'react'
const headerElement = ['URL', 'Click Count', 'Comment', 'Tags', 'Creation Date', "Operation"]
const  LinkTable = (props) => {
    return  headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }
export default LinkTable;