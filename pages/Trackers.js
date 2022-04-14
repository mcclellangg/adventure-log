// Trackers.js
import DetailedTracker from "../components/DetailedTracker"
import BriefTracker from "../components/BriefTracker";
import ManageTrackers from "../components/ManageTrackers";
import styles from "../styles/Trackers.module.css"
import { useState } from "react";

const Trackers = () => {
    const [newTracker, setNewTracker] = useState({
        label: "",
        maxValue: "",
        trackerType: "brief",
        trackerId: ""
    });
    const [trackers, setTrackers] = useState([
        {
            label: "HP",
            maxValue: 35,
            trackerType: "detail",
            trackerId: 0
        },
        {
            label: "Mana",
            maxValue: 15,
            trackerType: "detail",
            trackerId: 1
        },
        {
            label: "Spell Slots",
            maxValue: 8,
            trackerType: "brief",
            trackerId: 2
        },
        {
            label: "Channel Divinity",
            maxValue: 15,
            trackerType: "brief",
            trackerId: 3
        }
    ]);
    const [notes, setNotes] = useState(
        { value: "" }
    );
    const handleChange = (e) => {
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

    const updateNewTracker = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        setNewTracker({
            ...newTracker,
            [name]: value
        });
    }

    const addTracker = (e) => {
        e.preventDefault();
        newTracker.trackerId = trackers.length;
        console.log("Tracker added!", newTracker);
        setTrackers([...trackers, newTracker]);
        setNewTracker({ label: "", maxValue: "", trackerType: "brief", trackerId: "" })
    };

    const removeTracker = (e) => {
        e.preventDefault();
        const removeId = e.target.value;
        setTrackers([...trackers.filter((t) => t.trackerId != removeId)]);
    }

    return (
        <>
            <div className={styles.mainContainer}>
                {/* <h1>Trackers</h1> */}
                {trackers && trackers.filter(t => t.trackerType === "detail").map((detailTracker) => (
                    <DetailedTracker key={detailTracker.trackerId}
                        label={detailTracker.label}
                        maxValue={detailTracker.maxValue}
                        removeTracker={removeTracker} trackerId={detailTracker.trackerId} />
                ))}
                {trackers && trackers.filter(t => t.trackerType === "brief").map((briefTracker) => (
                    <BriefTracker key={briefTracker.trackerId}
                        statAbv={briefTracker.label}
                        statTotal={briefTracker.maxValue}
                        removeTracker={removeTracker} trackerId={briefTracker.trackerId} />
                ))}
                <hr></hr>
                <span className={styles.formText}>Add Trackers :</span>
                <form className={styles.newTrackerContainer} onSubmit={addTracker}>
                    <input className={styles.trackerInput}
                        placeholder="Label"
                        name="label"
                        value={newTracker.label}
                        onChange={updateNewTracker}
                        size={6}>
                    </input>
                    <input className={styles.trackerInput}
                        placeholder="Max Value"
                        name="maxValue"
                        value={newTracker.maxValue}
                        onChange={updateNewTracker}
                        type="number"
                        min="0"
                        max="10000">
                    </input>
                    <div className={styles.columnContainer}>
                        <span className={styles.smallLabel}>Select Type: </span>
                        <div className={styles.wrapper}>
                            <div className={styles.customInput}>
                                <input type="radio"
                                    id="detail"
                                    name="trackerType"
                                    value="detail"
                                    checked={newTracker.trackerType === "detail"}
                                    onChange={updateNewTracker} />
                                <label htmlFor="detail">Detail</label>
                            </div>
                            <div className={styles.customInput}>
                                <input type="radio"
                                    id="brief"
                                    name="trackerType"
                                    value="brief"
                                    checked={newTracker.trackerType === "brief"}
                                    onChange={updateNewTracker} />
                                <label htmlFor="brief">Brief</label>
                            </div>
                        </div>
                    </div>
                    <div className={styles.container}>
                        <button className={styles.crudBtn} type="submit">&#43;</button>
                    </div>
                </form>
                <hr></hr>
                <ManageTrackers trackers={trackers} setTrackers={setTrackers}></ManageTrackers>
            </div>

            <div className={styles.notesForm}>
                <h2>Notes:</h2>
                <textarea className={styles.notesArea}
                    rows={20} cols={50}
                    placeholder="Log your notes here champion!"
                    value={notes.value}
                    onChange={handleChange}>
                </textarea>
                <button className={styles.dwnldBtn} onClick={downloadTxtArea}>Download Notes</button>
            </div>

        </>
    )
};

export default Trackers;
