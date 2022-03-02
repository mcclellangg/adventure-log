// Log Page
import { useState } from "react";
import styles from "../styles/Log.module.css";

const Log = () => {
    // Stat component based on prop value
    const StatDiv = ({ statTotal, statAbv }) => {
        const [currentTotal, setCurrentTotal] = useState(statTotal);

        const handlePlus = () => setCurrentTotal(currentTotal + 1);
        const handleMinus = () => setCurrentTotal(currentTotal - 1);

        return (
            <div className={styles.stat}>{statAbv}: {currentTotal} / {statTotal}
                <div className={styles.btn_holder}>
                    <button className={styles.stat_button} onClick={handlePlus}>+</button>
                    <button className={styles.stat_button} onClick={handleMinus}>-</button>
                </div>
            </div>
        )
    };

    return (
        <div className={styles.card}>
            <h3>Stat Block</h3>
            <StatDiv statTotal={40} statAbv={"HP"} />
            <StatDiv statTotal={10} statAbv={"SS"} />
            <StatDiv statTotal={5} statAbv={"SR"} />
        </div>
    );
};

export default Log;
