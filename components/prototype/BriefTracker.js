// Stat component based on prop value
import { useState, useEffect } from "react";
import styles from "../../styles/Trackers.module.css";

const BriefTracker = ({ statTotal, statAbv, detail, reset, removeTracker, trackerId }) => {
    const [currentTotal, setCurrentTotal] = useState(statTotal);

    useEffect(() => {
        setCurrentTotal(statTotal);
    }, [statTotal, reset]);

    const handlePlus = () => setCurrentTotal(+currentTotal + 1);
    const handleMinus = () => setCurrentTotal(+currentTotal - 1);

    return (
        <>
            <div id={styles.containsHidden} className={styles.outerContainer}>
                <div className={styles.btnContainer}>
                    <button className={`${styles.crudBtn} ${styles.errorRed}`}
                        value={trackerId} onClick={removeTracker}>
                        &#88;</button>
                </div>
                <div title={detail} className={styles.trackerContainer}>{statAbv}: {currentTotal} / {statTotal}
                    <div>
                        <button className={`${styles.briefBtn} ${styles.complement}`} onClick={handlePlus}>+</button>
                        <button className={`${styles.briefBtn} ${styles.primary}`} onClick={handleMinus}>-</button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default BriefTracker;
