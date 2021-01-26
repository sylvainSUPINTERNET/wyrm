import logo from './logo.svg';
import './App.css';

import { Navbar } from "./components/Navbar";
import { Editor } from "./components/query/Editor";
import React, { useState } from 'react';


import Draggable from 'react-draggable';


export const SchemaContext = React.createContext({})

function App() {
  // https://blog.shevarezo.fr/uploads/posts/bulk/8erAyPMw_dbdiagram-io_schema.png

  const setSchema = (apiInputSchema) => {
    state.schemas = [...state.schemas, apiInputSchema]
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
