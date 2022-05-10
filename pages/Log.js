// Updated Redesign of Log
import styles from "../styles/Redesign.module.css"
import TrackerForm from "../components/upgraded/TrackerForm";

const Log = () => {
    return (
        <>
            <h1 className={styles.header}>THE ADVENTURE LOG</h1>
            <div className={styles.layoutContainer}>
                <TrackerForm></TrackerForm>
            </div>
        </>
    )
}

export default Log;
