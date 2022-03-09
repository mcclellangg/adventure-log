// Stat component based on prop value
import { useState, useEffect } from "react";
import styles from "../styles/Log.module.css";

const StatDiv = ({ statTotal, statAbv, detail, reset }) => {
    const [currentTotal, setCurrentTotal] = useState(statTotal);

    useEffect(() => {
        setCurrentTotal(statTotal);
    }, [statTotal, reset]);

    const handlePlus = () => setCurrentTotal(currentTotal + 1);
    const handleMinus = () => setCurrentTotal(currentTotal - 1);

    return (
        <div title={detail} className={styles.stat}>{statAbv}: {currentTotal} / {statTotal}
            <div className={styles.btn_holder}>
                <button className={styles.stat_btn} onClick={handlePlus}>+</button>
                <button className={styles.stat_btn} onClick={handleMinus}>-</button>
            </div>
        </div>
    )
};

export default StatDiv;
