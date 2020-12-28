import React , { useContext } from "react";

import { DispatchWriterContent } from "../../GlobalState";

const DropElements = ({ item , setShowDropdown , setRun }) => {

    const dispatchWriterContent = useContext(DispatchWriterContent);

    return(
        <div onClick={ () => { dispatchWriterContent( {type:item} ); setShowDropdown(false); setRun(false) }} >
            <span>{ item[0] }</span>
            { item.slice(1).toLowerCase() }
        </div>
    );
}

export default DropElements;