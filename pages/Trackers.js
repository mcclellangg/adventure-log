// Trackers.js
import DetailedTracker from "../components/DetailedTracker"
import StatDiv from "../components/StatDiv";
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
                    <StatDiv key={briefTracker.trackerId}
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
                        <button className={styles.addBtn} type="submit">+</button>
                    </div>
                </form>
                <hr></hr>
                <ManageTrackers trackers={trackers} setTrackers={setTrackers}></ManageTrackers>
            </div>

        </>
    )
};

export default Trackers;
