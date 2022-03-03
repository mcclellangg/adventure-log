// Log Page
import { useState } from "react";
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

    // Stat component based on prop value
    const StatDiv = ({ statTotal, statAbv }) => {
        const [currentTotal, setCurrentTotal] = useState(statTotal);

        const handlePlus = () => setCurrentTotal(currentTotal + 1);
        const handleMinus = () => setCurrentTotal(currentTotal - 1);

        return (
            <div className={styles.stat}>{statAbv}: {currentTotal} / {statTotal}
                <div className={styles.btn_holder}>
                    <button className={styles.stat_button} onClick={handlePlus}>+</button>
                    <button className={styles.stat_button} onClick={handleMinus}>-</button>
                </div>
            </div>
        )
    };

    return (
        <>
            <div className={styles.card}>
                <h3>Stat Block</h3>
                <StatDiv statTotal={40} statAbv={"HP"} />
                <StatDiv statTotal={10} statAbv={"SS"} />
                <StatDiv statTotal={5} statAbv={"SR"} />
            </div>
            <div>
                <label>Notes:
                    <textarea className={styles.notes_area}
                        rows={20} cols={50}
                        value={notes.value}
                        onChange={handleChange}>
                    </textarea>
                </label>
                <button onClick={downloadTxtArea}>Download Notes</button>
            </div>
        </>
    );
};

export default Log;
