// Single Tracker
import styles from "./SingleTracker.module.css";

const SingleTracker = () => {
    return (
        <>
            <div className={styles.singleTracker}>
                <label>DEXTERITY</label>
                <div className={styles.valueWrapper}>
                    <div>01</div>
                    <div>/</div>
                    <div>20</div>
                </div>
                <button>&#8722;</button>
                <button>&#65291;</button>
            </div>
        </>
    );
};

export default SingleTracker;
