import React from 'react';
import PropTypes from "prop-types";

const _drawDatabase = (schema) => {
    console.log("WIP draw schema DATABASE card")
    // TODO wip
    return (
        <div className="card">
            <pre>{JSON.stringify(schema)}</pre>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{schema.name}</li>
            </ul>
        </div>
    )
}

const _getDrawType = (schema) => {
    console.log("GET DRAW TYPE", schema)
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
                    return _getDrawType(schema)
                })
            }
        </div>
    )
}

DrawShape.propTypes = {
    schemas: PropTypes.array
};