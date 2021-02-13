import React, { useState } from 'react'
import {StyledSearchBox} from "./SearchBox.style"

export const SearchBox = (props) => {

    const [inputValue,setInputValue] = useState("");

    return (
        <StyledSearchBox>
            <input onChange={(e) => setInputValue(e.target.value)}/>
            <button onClick={()=>props.setSearchKeyword(inputValue)}>Button</button>
        </StyledSearchBox>
    )
}
