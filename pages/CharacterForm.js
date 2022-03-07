import styles from '../styles/CharacterForm.module.css';

const CharacterForm = () => {
    const MAX_LEVEL = [...Array(20).keys()];

    return (
        <form className={styles.form_character}>
            <span>
                <label>Character Name</label>
                <input type="text"></input>
            </span>
            <span>
                <label>Class</label>
                <select>
                    <option>Warrior</option>
                    <option>Mage</option>
                    <option>Hunter</option>
                    <option>Cleric</option>
                </select>
            </span>
            <span>
                <label>Level</label>
                <select>
                    {MAX_LEVEL.map((level) => {
                        return <option key={level}>{level + 1}</option>;
                    })}
                </select>
            </span>
            <span>
                <label>Total HP</label>
                <input type="text" size="4"></input>
            </span>
            <span>
                <label>Total SS</label>
                <input type="text" size="4"></input>
            </span>
            <span>
                <label>Total SR</label>
                <input type="text" size="4"></input>
            </span>
            <span>
                <label>Description</label>
                <textarea rows={15} cols={42}></textarea>
            </span>
            <button className={styles.submit_btn} type="submit">Submit</button>
        </form>
    )
};

export default CharacterForm;
