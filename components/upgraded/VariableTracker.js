// Variable Tracker
import { useState } from "react";
import styles from "./VariableTracker.module.css";

const VariableTracker = ({ label, maxValue }) => {
    const [currentTotal, setCurrentTotal] = useState(maxValue);
    const [adjuster, setAdjuster] = useState("00");
    const [clicked, setClicked] = useState(false);

    const addAdjuster = () => setCurrentTotal(+currentTotal + +adjuster);
    const deductAdjuster = () => setCurrentTotal(+currentTotal - +adjuster);

    return (
        <>
            <div className={styles.variableTracker}>
                <div className={styles.contentWrapper}>
                    <label>{label}</label>
                    <div className={styles.valueWrapper}>
                        {clicked ?
                            (
                                <input
                                    type="number"
                                    value={currentTotal}
                                    onMouseLeave={() => setClicked(!clicked)}
                                    onChange={(e) => setCurrentTotal(e.target.value)}>
                                </input>
                            ) :
                            (
                                <div onClick={() => setClicked(!clicked)}>
                                    {currentTotal}
                                </div>
                            )
                        }
                        <div>/</div>
                        <div>{maxValue}</div>
                    </div>
                </div>
                <input className={styles.variableAdj}
                    type="number"
                    min="0"
                    max="999"
                    value={adjuster}
                    onChange={(e) => setAdjuster(e.target.value)}>
                </input>
                <div className={styles.flexColumn}>
                    <button onClick={addAdjuster}>&#65291;</button>
                    <button onClick={deductAdjuster}>&#8722;</button>
                </div>
            </div>
        </>
    );
};

export default VariableTracker;
