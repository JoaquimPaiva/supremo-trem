import React from 'react'

export default (props) => {

    // props é somente leitura!!!!
    // props.titulo = "outro titulo";
    
    return (
        <>
            <h3>{props.titulo}</h3>
            <p>{props.subtitulo}</p>
        </>
    )
}
