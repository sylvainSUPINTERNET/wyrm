import React from 'react';
import PropTypes from "prop-types";
import Draggable from 'react-draggable';

import { DbShapeStyle, DbShapeStyleTerminal } from "./DrawShape.style";

const _drawDatabase = (schema) => {
    return (
        <div className="card" style={{width: schema.width, height: schema.height}}>
            <h4 className="display-12 p-2 text-center" style={DbShapeStyle}>{schema.name}</h4>
            <ul className="list-group list-group-flush">
            <pre>{JSON.stringify(schema)}</pre>
                {/*<li className="list-group-item">{schema.name}</li>*/}
            </ul>
        </div>
    )
}

const _getDrawType = (schema) => {

    const { type } = schema

    if ( type === "DATABASE" ) {
        return _drawDatabase(schema)
    }
}

export const DrawShape = (props) => {
    const { schemas } = props

    return (
            <div>
                {
                    schemas.map( schema => {
                        return <Draggable>
                            { _getDrawType(schema) }
                        </Draggable>
                    })
                }
            </div>
    )
}

DrawShape.propTypes = {
    schemas: PropTypes.array
};