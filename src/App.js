import logo from './logo.svg';
import './App.css';

import { Navbar } from "./components/Navbar";
import { Editor } from "./components/query/Editor";
import React, { useState } from 'react';


import Draggable, {DraggableCore} from 'react-draggable';


export const LanguageContext = React.createContext({
  language: "",
  setLanguage: () => {},
  schema: [],
  setSchema: () => {}
})

function App() {
  // https://blog.shevarezo.fr/uploads/posts/bulk/8erAyPMw_dbdiagram-io_schema.png

  const setLanguage = (language) => {
    setState({...state, language: language})
  }

  const setSchema = (apiInputSchema) => {

      let currentState = {...state};
      currentState.schema = [...currentState.schema, apiInputSchema];
    
      setSchema({...currentState})
  }

  const initState = {
    language: "FR",
    setLanguage: setLanguage,
    schema: [],
    setSchema: setSchema
  } 

  const [state, setState] = useState(initState)



  return (
    <LanguageContext.Provider value={state}>
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
        </div>
      </div>

    </div>
    </LanguageContext.Provider>

  );
}

export default App;
