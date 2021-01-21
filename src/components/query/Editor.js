import React, { useState } from 'react';
import {apiConfig} from "../../conf/api";

import {consoleStyle, editorWindow} from "./style/Editor.style"

export const Editor = (props) => {
    const [rawQuery, setRawQuery] = useState(null);

    // https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Editable_content/Rich-Text_Editing_in_Mozilla
    /*
    const onPressKey = (keyObject) => {
        const { value } = keyObject.target; 
    }*/


    const onChangeEditor = (event) => {
        const { value } = event.target;
        setRawQuery(value);
    }


    const onSubmitRawQuery = async () => {

       let req = await fetch(`${apiConfig.wyrmqueryUrl}/query`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        method: "POST",
        body: JSON.stringify({query: rawQuery})
     })
       let json = await req.json();
       console.log(json);
    }

    

    return ( <div>
        <div className="container-fluid" style={consoleStyle}>
            <textarea style={editorWindow} /*onKeyDown={onPressKey}*/ onChange={onChangeEditor} />
        </div>
        <div>
            <button className="btn btn-md btn-info" onClick={onSubmitRawQuery}>Submit</button>
        </div>

    </div>)
}


