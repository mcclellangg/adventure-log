// Tracker from
import { useState } from "react";
import styles from "./TrackerForm.module.css";

const TrackerForm = ({ setTrackers, trackers }) => {
    const initialState = {
        label: "",
        maxValue: "",
        trackerType: "single",
        id: +new Date()  // Creates unique id
    };
    const [trackerForm, setTrackerForm] = useState({ ...initialState });

    const clearForm = () => {
        setTrackerForm({ ...initialState });
    }

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
        setTrackers([...trackers, trackerForm]);
        console.log(trackerForm);
        clearForm();
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
                            checked={trackerForm.trackerType === "variable"}
                            onChange={updateForm}>
                        </input>
                        <label htmlFor="variable">Variable</label>
                    </div>
                    <div className={styles.customInput}>
                        <input type="radio"
                            id="single"
                            name="trackerType"
                            value="single"
                            checked={trackerForm.trackerType === "single"}
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
