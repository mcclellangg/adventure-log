// Updated Redesign of Log
import styles from "../styles/Redesign.module.css"
import TrackerForm from "../components/upgraded/TrackerForm";
import VariableTracker from "../components/upgraded/VariableTracker";
import SingleTracker from "../components/upgraded/SingleTracker";

const Log = () => {
    return (
        <>
            <h1 className={styles.header}>THE ADVENTURE LOG</h1>
            <div className={styles.layoutContainer}>
                <TrackerForm></TrackerForm>
                <div className={styles.trackerContainer}>
                    <VariableTracker
                        label={"HEALTH POINTS"}
                        maxValue={"35"}>
                    </VariableTracker>
                    <VariableTracker
                        label={"MANA"}
                        maxValue={"48"}>
                    </VariableTracker>

                    <hr></hr>

                    <SingleTracker
                        label={"CHANNEL DIVINITY"}
                        maxValue={"2"}>
                    </SingleTracker>
                    <SingleTracker
                        label={"LAY ON HANDS"}
                        maxValue={"15"}>
                    </SingleTracker>
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
