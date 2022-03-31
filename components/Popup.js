import styles from '../styles/Popup.module.css';

const Popup = (props) => {
    return (props.trigger) ? (
        <div className={styles.popup}>
            <div className={styles.popup_inner}>
                {props.children}
            </div>

        </div>
    ) : "";
};

export default Popup;
