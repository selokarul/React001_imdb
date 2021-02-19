import React, { useRef } from 'react'
import {StyledSearchBox} from "./SearchBox.style"

export const SearchBox = (props) => {

    const inputRef = useRef();

    return (
        <StyledSearchBox>
            <input ref = {inputRef} />
            <button onClick={()=>props.setSearchKeyword(inputRef?.current?.value)} >Button</button>
        </StyledSearchBox>
    )
}
