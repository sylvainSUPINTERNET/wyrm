import React, { useState, useContext } from 'react';
import { SchemaContext } from '../../App';
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


    const onSubmitRawQuery = async (SchemaContext) => {
        //SchemaContext.schema = [...SchemaContext.schema, "ok"]


        let res = await fetch(`${apiConfig.wyrmqueryUrl}/query`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({query: rawQuery})
        })

        if ( res.status === 200 ) {
            let json = await res.json();
            let { data } = json;
            SchemaContext.setSchema(data);
        }
 
    }

    

    return ( 
        <SchemaContext.Consumer>
                {(context) => (
                    <div>
                    <div className="container-fluid" style={consoleStyle}>
                        <textarea style={editorWindow} /*onKeyDown={onPressKey}*/ onChange={onChangeEditor} />
                        <div onDrag={e => {console.log(e)}} style={{width:"100px", height: "100px", background: 'red'}}>
                            <p>{context.language}</p>
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-md btn-info" onClick={() => onSubmitRawQuery(context)}>Submit</button>
                    </div>

                    </div>
                )}

         </SchemaContext.Consumer>
)
}


