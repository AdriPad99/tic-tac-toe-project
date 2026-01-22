import { useState } from "react";

export default function Player({ initialName, symbol, currPlayerActive, onChangeName }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleIsEditingToggle() {
        setIsEditing(!isEditing);

        if (isEditing) {
            onChangeName(symbol, playerName);
        }
    }

    function handleChange(event) {
        console.log(event);
        setPlayerName(event.target.value);
    }

    let editOrNonEditSegment;

    if (isEditing) {
        editOrNonEditSegment = <input type="input" placeholder="Name" value={playerName} onChange={handleChange}></input>;
    } else {
        editOrNonEditSegment = <span className="player-name">{playerName}</span>;
    }

    return <>
        <li className={currPlayerActive ? 'active' : undefined}>
            <span className="player">
                {editOrNonEditSegment}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={() => handleIsEditingToggle()}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    </>
}