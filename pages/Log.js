// Updated Redesign of Log
import { useState } from "react";

import testData from "../design/trackers";

import styles from "../styles/Redesign.module.css"
import TrackerForm from "../components/upgraded/TrackerForm";
import VariableTracker from "../components/upgraded/VariableTracker";
import SingleTracker from "../components/upgraded/SingleTracker";

const Log = () => {
    const [trackers, setTrackers] = useState(testData);

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
                </div>

                <div className={styles.notesContainer}>
                    <label>NOTES</label>
                    <textarea rows={40} cols={60}></textarea>
                </div>
            </div>
        </>
    )
}

export default Log;
