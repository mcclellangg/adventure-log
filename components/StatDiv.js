// Stat component based on prop value
import { useState, useEffect } from "react";
import styles from "../styles/Log.module.css";

const StatDiv = ({ statTotal, statAbv, detail, reset, removeTracker, trackerId }) => {
    const [currentTotal, setCurrentTotal] = useState(statTotal);

    useEffect(() => {
        setCurrentTotal(statTotal);
    }, [statTotal, reset]);

    const handlePlus = () => setCurrentTotal(+currentTotal + 1);
    const handleMinus = () => setCurrentTotal(+currentTotal - 1);

    return (
        <>
            <button value={trackerId} onClick={removeTracker}>Delete</button>
            <div title={detail} className={styles.stat}>{statAbv}: {currentTotal} / {statTotal}

                <div>
                    <button className={styles.statBtn} onClick={handlePlus}>+</button>
                    <button className={styles.statBtn} onClick={handleMinus}>-</button>
                </div>
            </div>
        </>
    )
};

export default StatDiv;
