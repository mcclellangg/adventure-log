// Single Tracker
import { useState } from "react";
import styles from "./SingleTracker.module.css";

const SingleTracker = ({ label, maxValue}) => {
    const [currentTotal, setCurrentTotal] = useState(maxValue);

    const incCurrent = () => setCurrentTotal(+currentTotal + 1);
    const decCurrent = () => setCurrentTotal(+currentTotal - 1);

    return (
        <>
            <div className={styles.singleTracker}>
                <label>{label}</label>
                <div className={styles.valueWrapper}>
                    <div>{currentTotal}</div>
                    <div>/</div>
                    <div>{maxValue}</div>
                </div>
                <button onClick={decCurrent}>&#8722;</button>
                <button onClick={incCurrent}>&#65291;</button>
            </div>
        </>
    );
};

export default SingleTracker;
