import React, { useState } from 'react';

import {consoleStyle, editorWindow} from "./style/Editor.style"

export const Editor = (props) => {

    const onPressKey = (keyObject) => {
        const { value } = keyObject.target; 
    }

    return ( <div>
        <div className="container-fluid" style={consoleStyle}>
            <textarea style={editorWindow} onKeyDown={onPressKey}/>
        </div>
    </div>)
}


