// Log Page
import { useState } from "react";
import CharacterForm from "../components/CharacterForm";
import StatDiv from "../components/StatDiv";
import styles from "../styles/Log.module.css";

const Log = () => {
    // Functions and states for form
    const [notes, setNotes] = useState(
        { value: "Log your notes here champion!" }
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
        const file = new Blob([notes.value], {type: 'text/plain;charset=utf-8'});
        element.href = URL.createObjectURL(file);
        element.download = "adventureLogNotes.txt";
        document.body.appendChild(element);
        element.click();
    }

    return (
        <>
        <CharacterForm/>
        <h1>Adventure Log</h1>
            <div className={styles.card}>
                <h3>Stat Block</h3>
                <StatDiv statTotal={40} statAbv={"HP"} />
                <StatDiv statTotal={10} statAbv={"SS"} />
                <StatDiv statTotal={5} statAbv={"SR"} />
            </div>
            <div className={styles.notes_form}>
                <h2>Notes:</h2>
                    <textarea className={styles.notes_area}
                        rows={20} cols={50}
                        value={notes.value}
                        onChange={handleChange}>
                    </textarea>
                <button className={styles.dwnld_btn} onClick={downloadTxtArea}>Download Notes</button>
            </div>
        </>
    );
};

export default Log;
