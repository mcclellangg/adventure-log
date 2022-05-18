// Button for saving trackers locally
import { FaUpload, FaDownload } from "react-icons/fa";

import styles from "../styles/ManageTrackers.module.css";

const ManageTrackers = ({ trackers, setTrackers }) => {

    const downloadTrackers = () => {
        let dateYMD = new Date().toISOString().slice(0, 10);  //returns "YYYY-mm-dd"
        const element = document.createElement("a");
        const file = new Blob([JSON.stringify(trackers, null, 2)], { type: 'application/json' });
        element.href = URL.createObjectURL(file);
        element.download = `trackers${dateYMD}.json`;
        document.body.appendChild(element);
        element.click();
    }

    function validateFile(file) {
        const fileConstraints = {
            type: "application/json",
            maxSize: 1024,
        };
        if (file) {
            if (file.type !== fileConstraints.type) {
                alert("Invalid file type")
                return false;
            } if (file.size > fileConstraints.maxSize) {
                alert("File is too large");
                return false;
            } else {
                console.log("Valid file uploaded");
                return true;
            }
        } else {
            console.log("No file selected");
        }
    };

    const getFileItem = () => {
        const [file] = document.querySelector('input[type=file]').files;
        if (validateFile(file)) {
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setTrackers(JSON.parse(reader.result));
                alert("Trackers updated from file!");
            }, false);

            if (file) {
                reader.readAsText(file);
            }
        }
    }

    return (
        <>
            <div className={styles.btnContainer}>
                <button title="Download current trackers to json file"
                    onClick={downloadTrackers}>
                    <FaDownload /> <p>Download</p>
                </button>
                <input type="file" accept=".json" id="fileElem" className="visually-hidden" onChange={getFileItem}></input>
                <label htmlFor="fileElem">
                    <button title="Upload trackers from json file"
                        onClick={() => document.getElementById('fileElem').click()}>
                        <FaUpload /> <p>Upload</p>
                    </button>
                </label>
            </div>
        </>
    )
}

export default ManageTrackers;
