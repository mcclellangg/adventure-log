// Tracker from
import { useState } from "react";
import styles from "./TrackerForm.module.css";

const TrackerForm = ( {setTrackers, trackers }) => {
    const [trackerForm, setTrackerForm] = useState({
        label: "",
        maxValue: "",
        trackerType: "single",
        id: ""
    });

    const updateForm = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;

        setTrackerForm({
            ...trackerForm,
            [name]: value
        });
    };

    const submitForm = (e) => {
        e.preventDefault();
        trackerForm.id = trackers.length;
        setTrackers([
            ...trackers,
            trackerForm
        ]);
        console.log(trackerForm);
    };

    return (
        <>
            <form className={styles.trackerForm} onSubmit={submitForm}>
                <p className={styles.primaryText}>ADD TRACKERS</p>
                <label>Label</label>
                <input
                    name="label"
                    value={trackerForm.label}
                    onChange={updateForm}>
                </input>
                <label>Max Value</label>
                <input
                    name="maxValue"
                    value={trackerForm.maxValue}
                    onChange={updateForm}
                    type="number"
                    min="0"
                    max="10000">
                </input>
                <label>Select Type: </label>
                <div className={styles.radioWrapper}>
                    <div className={styles.customInput}>
                        <input type="radio"
                            id="variable"
                            name="trackerType"
                            value="variable"
                            onChange={updateForm}>
                        </input>
                        <label htmlFor="variable">Variable</label>
                    </div>
                    <div className={styles.customInput}>
                        <input type="radio"
                            id="single"
                            name="trackerType"
                            value="single"
                            defaultChecked
                            onChange={updateForm}>
                        </input>
                        <label htmlFor="single">Single</label>
                    </div>
                </div>
                <button type="submit">&#65291; ADD NEW</button>
            </form>
        </>
    );
};

export default TrackerForm;
