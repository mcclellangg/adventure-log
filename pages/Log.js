// Log
import { useState } from "react";
import { FaSave } from "react-icons/fa";

import testData from "../data/trackers";

import styles from "../styles/Log.module.css"
import TrackerForm from "../components/upgraded/TrackerForm";
import VariableTracker from "../components/upgraded/VariableTracker";
import SingleTracker from "../components/upgraded/SingleTracker";
import ManageTrackers from "../components/ManageTrackers";

const Log = () => {
    const [trackers, setTrackers] = useState(testData);
    const [notes, setNotes] = useState({ value: "" });

    const updateNotes = (e) => {
        setNotes({ value: e.target.value });
    };

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



    const deleteTracker = (e) => {
        e.preventDefault();
        const removeById = e.target.value;
        setTrackers([...trackers.filter((t) => t.id != removeById)]);
    };

    return (
        <>
            <h1 className={styles.header}>THE ADVENTURE LOG</h1>
            <div className={styles.layoutContainer}>
                <TrackerForm
                    setTrackers={setTrackers}
                    trackers={trackers}>
                </TrackerForm>
                <div className={styles.trackerContainer}>
                    {trackers && trackers.filter(t => t.trackerType === "variable").map((variableTracker) =>
                        <VariableTracker
                            key={variableTracker.id}
                            label={variableTracker.label}
                            maxValue={variableTracker.maxValue}
                            trackerId={variableTracker.id}
                            deleteTracker={deleteTracker}>
                        </VariableTracker>
                    )}
                    <hr></hr>
                    {trackers && trackers.filter(t => t.trackerType === "single").map((singleTracker) =>
                        <SingleTracker
                            key={singleTracker.id}
                            label={singleTracker.label}
                            maxValue={singleTracker.maxValue}
                            trackerId={singleTracker.id}
                            deleteTracker={deleteTracker}>
                        </SingleTracker>
                    )}
                    <ManageTrackers trackers={trackers} setTrackers={setTrackers}></ManageTrackers>
                </div>

                <div className={styles.notesContainer}>
                    <label>NOTES</label>
                    <textarea rows={40} cols={60}
                        placeholder="Log your notes here Adventurer!"
                        value={notes.value}
                        onChange={updateNotes}>
                    </textarea>
                    <button onClick={downloadTxtArea}>
                        <FaSave/> Save
                    </button>
                </div>
            </div>
        </>
    )
};

export default Log;
