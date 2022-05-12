// Updated Redesign of Log
import styles from "../styles/Redesign.module.css"
import TrackerForm from "../components/upgraded/TrackerForm";
import VariableTracker from "../components/upgraded/VariableTracker";

const Log = () => {
    return (
        <>
            <h1 className={styles.header}>THE ADVENTURE LOG</h1>
            <div className={styles.layoutContainer}>
                <TrackerForm></TrackerForm>
                <div className={styles.trackerContainer}>
                    <VariableTracker></VariableTracker>
                    <VariableTracker></VariableTracker>
                    <hr></hr>
                    <div className={styles.singleTracker}>
                        <label>CHANNEL DIVINITY</label>
                        <div className={styles.valueWrapper}>
                            <div>25</div>
                            <div>/</div>
                            <div>30</div>
                        </div>
                        <button>&#8722;</button>
                        <button>&#65291;</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Log;
