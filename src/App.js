import logo from './logo.svg';
import './App.css';

import { Navbar } from "./components/Navbar";
import { Editor } from "./components/query/Editor";
import React, { useState } from 'react';

import {SchemaContext} from "./components/Context";

import Draggable from 'react-draggable';




function App() {
  // https://blog.shevarezo.fr/uploads/posts/bulk/8erAyPMw_dbdiagram-io_schema.png

  const setSchema = (apiInputSchema) => {
    // Update state for app component
    state.schemas = [...state.schemas, apiInputSchema]

    // Also update context for other components with schemas
    SchemaContext.schemasCtx = state.schemas
    // Update state with schemas from editor only for App component usage
    setState({...state})
  }

  
  const [state, setState] = useState({
    schemas: [],
    setSchema: setSchema
  })




  return (
    <SchemaContext.Provider value={state}>
    <div>
      <Navbar />
      <div className="row">
        <div className="col-md-3">
          <div className="container">
            <Editor/>
          </div>
        </div>
        <div className="col-md-7">
          <div className="container-fluid" style={{background: 'purple'}}>
              <Draggable>
                <div>
                  Sal
                </div>
              </Draggable>
            </div>
            {
              state.schemas.map( schema => {
                return <p>{schema.name}</p>
              })
            }
        </div>
      </div>

    </div>
    </SchemaContext.Provider>

  );
}

export default App;
