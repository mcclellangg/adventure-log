import styles from './Popup.module.css';

const Popup = (props) => {
    return (props.trigger) ? (
        <div className={styles.popup}>
            <div className={styles.popupInner}>
                {props.children}
            </div>

        </div>
    ) : "";
};

export default Popup;
