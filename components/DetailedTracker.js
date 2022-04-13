// Detailed Stat Tracker component
import { useState } from "react";
import styles from "../styles/Trackers.module.css";

const DetailedTracker = ({ label, maxValue, trackerId, removeTracker }) => {
    const [currentTotal, setCurrentTotal] = useState(maxValue);
    const [adjusterValue, setAdjusterValue] = useState("");
    const [clicked, setClicked] = useState(false);

    const handleAdd = () => setCurrentTotal(+currentTotal + +adjusterValue);
    const handleDeduct = () => setCurrentTotal(+currentTotal - +adjusterValue);

    return (
        <>
            <div className={styles.outerContainer} id={styles.containsHidden}>
                <div className={styles.btnContainer}>
                    <button className={`${styles.crudBtn} ${styles.errorRed}`}
                        value={trackerId} onClick={removeTracker}>
                        &#88;</button>
                </div>
                <div className={styles.trackerContainer}>
                    <div className={styles.trackerContent}>
                        <span className={styles.contentLabel}>{label}</span>
                        <div className={styles.contentGroup}>
                            {clicked ? (
                                <input className={styles.contentInput}
                                    type="number"
                                    value={currentTotal}
                                    onMouseLeave={() => setClicked(!clicked)}
                                    onChange={(e) => setCurrentTotal(e.target.value)}>
                                </input>
                            ) :
                                (
                                    <span className={styles.contentInputText}
                                        onClick={() => setClicked(!clicked)}>{currentTotal}
                                    </span>
                                )
                            }
                            <span className={styles.contentSep}> / </span>
                            <span className={styles.contentText}>{maxValue}</span>
                        </div>
                    </div>

                    <div className={styles.trackerContent}>
                        <div className={styles.trackerAdjuster}>
                            <button className={`${styles.adjusterBtn} ${styles.complement}`}
                                onClick={handleAdd}>
                                Add
                            </button>
                            <input className={styles.contentInput}
                                type="number"
                                min="0"
                                max="999"
                                value={adjusterValue}
                                onChange={(e) => setAdjusterValue(e.target.value)}>
                            </input>
                            <button className={`${styles.adjusterBtn} ${styles.primary}`}
                                onClick={handleDeduct}>
                                Deduct
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
        </>
    )
};

export default DetailedTracker;
