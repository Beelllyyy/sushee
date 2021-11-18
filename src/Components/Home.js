import React from 'react'

export default function Home() {

    function handleClick() {
        // T1: ottenere nome
        // apre prima textbox?
        // T2 agganciati a Header.addUser()
    }

    return(
        <div className="Home">
            <button className="btn" onClick={handleClick}>Aggiungi scrofa</button>
            <button className="btn">Listone</button>
        </div>
    )
}