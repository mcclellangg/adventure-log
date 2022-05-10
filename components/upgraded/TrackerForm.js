// Tracker from
import styles from "./TrackerForm.module.css";

const TrackerForm = () => {
    return (
        <>
            <div className={styles.trackerForm}>
                <p className={styles.primaryText}>ADD TRACKERS</p>
                <label>Label</label>
                <input></input>
                <label>Max Value</label>
                <input></input>
                <label>Select Type: </label>
                <div className={styles.radioWrapper}>
                    <div className={styles.customInput}>
                        <input type="radio"
                            id="variable"
                            name="trackerType">
                        </input>
                        <label htmlFor="variable">Variable</label>
                    </div>
                    <div className={styles.customInput}>
                        <input type="radio"
                            id="single"
                            name="trackerType">
                        </input>
                        <label htmlFor="single">Single</label>
                    </div>
                </div>
                <button>&#65291; ADD NEW</button>
            </div>
        </>
    );
};

export default TrackerForm;
