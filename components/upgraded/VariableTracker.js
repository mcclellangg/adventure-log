// Variable Tracker
import styles from "./VariableTracker.module.css";

const VariableTracker = () => {
    return (
        <>
            <div className={styles.variableTracker}>
                <div className={styles.contentWrapper}>
                    <label>SPELL SLOTS</label>
                    <div className={styles.valueWrapper}>
                        <div>01</div>
                        <div>/</div>
                        <div>05</div>
                    </div>
                </div>
                <label className={styles.variableAdj}>09</label>
                <div className={styles.flexColumn}>
                    <button>&#65291;</button>
                    <button>&#8722;</button>
                </div>
            </div>
        </>
    );
};

export default VariableTracker;
