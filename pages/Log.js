// Log Page
import { useState } from "react";
import CharacterForm from "../components/CharacterForm";
import StatDiv from "../components/StatDiv";
import Popup from "../components/Popup";
import styles from "../styles/Log.module.css";

const CHARACTERS = require('../data/characters.json')

const Log = () => {
    // Functions and states for char select
    const [characterList, setCharacterList] = useState(CHARACTERS);
    const [selectedCharacter, setSelectedCharacter] = useState(characterList[0]);
    const [addCharacter, setAddCharacter] = useState(false);

    // States for Character Sheet
    const [reset, setReset] = useState(false);

    // Functions and states for form
    const [notes, setNotes] = useState(
        { value: "" }
    );

    const handleChange = (e) => {
        // Update the state of the text area on new changes
        setNotes({ value: e.target.value });
    }

    const downloadTxtArea = () => {
        /*
          Temporarily creates an anchor element, and attaches the text area
          to notes state, to that element, creates a file for download
        */
        const element = document.createElement("a");
        const file = new Blob([notes.value], { type: 'text/plain;charset=utf-8' });
        element.href = URL.createObjectURL(file);
        element.download = "adventureLogNotes.txt";
        document.body.appendChild(element);
        element.click();
    }

    return (
        <>
            <div className={styles.card}>
                <h3>Character Select</h3>
                <hr />
                <p>Sample Characters</p>
                <div className={"container"}>
                    <select onChange={(e) => setSelectedCharacter(characterList[e.target.value])}>
                        {characterList.map((char, index) => {
                            return <option value={index} key={index}>{char.characterName}--{char.class}</option>;
                        })}
                    </select>
                    <button className={styles.stat_btn} onClick={() => setAddCharacter(!addCharacter)}>Create Character</button>
                </div>
            </div>

            <Popup trigger={addCharacter}>
                <CharacterForm
                    characterList={characterList}
                    setCharacterList={setCharacterList}
                    setAddCharacter={setAddCharacter}>
                </CharacterForm>
            </Popup>

            <h1>Adventure Log</h1>
            <h2>Character Sheet</h2>
            <div className={styles.character_container}>
                <div className={styles.card}>
                    <h3>Info</h3>
                    <p>Name: {selectedCharacter.characterName}</p>
                    <p>Class: {selectedCharacter.class}</p>
                    <p>Level: {selectedCharacter.level}</p>
                </div>
                <div className={styles.card}>
                    <h3>Stats</h3>
                    <StatDiv statTotal={selectedCharacter.totalHP} statAbv={"HP"} detail={"Health Points"} reset={reset} />
                    <StatDiv statTotal={selectedCharacter.totalSS} statAbv={"SS"} detail={"Spell Slots"} />
                    <StatDiv statTotal={selectedCharacter.totalSR} statAbv={"SR"} detail={"Short Rests"} />
                    <button className={styles.stat_btn} onClick={() => setReset(!reset)}>Reset HP</button>
                </div>
                <div className={styles.card}>
                    <h3>Description</h3>
                    <p>{selectedCharacter.description}</p>
                </div>
            </div>
            <div className={styles.notes_form}>
                <h2>Notes:</h2>
                <textarea className={styles.notes_area}
                    rows={20} cols={50}
                    placeholder="Log your notes here champion!"
                    value={notes.value}
                    onChange={handleChange}>
                </textarea>
                <button className={styles.dwnld_btn} onClick={downloadTxtArea}>Download Notes</button>
            </div>
        </>
    );
};

export default Log;
