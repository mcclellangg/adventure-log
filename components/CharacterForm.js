import styles from '../styles/CharacterForm.module.css';
import { useState } from "react";

const CharacterForm = ({ characterList, setCharacterList, setAddCharacter }) => {
    const MAX_LEVEL = [...Array(20).keys()];
    const [form, setForm] = useState({
        characterName: "",
        class: "warrior",
        level: 1,
        totalHP: "",
        totalSS: "",
        totalSR: "",
        description: ""
    });

    const handleChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Character Info Submitted!')
        console.log(form);
        setCharacterList([...characterList, form])
        setAddCharacter(false);
    };

    return (
        <form className={styles.formCharacter} onSubmit={handleSubmit}>
            <h3 className={styles.formTitle}>Custom Character</h3>
            <hr />
            <div className='grid'>
                <span>
                    <label>Character Name</label>
                    <input
                        type="text"
                        name="characterName"
                        onChange={handleChange}
                        value={form.characterName} />
                </span>
                <span>
                    <label>Level</label>
                    <select name="level" value={form.level} onChange={handleChange}>
                        {MAX_LEVEL.map((level) => {
                            return <option key={level}>{level + 1}</option>;
                        })}
                    </select>
                </span>
            </div>
            <span>
                <label>Class</label>
                <select name="class" value={form.class} onChange={handleChange}>
                    <option value="warrior">Warrior</option>
                    <option value="mage">Mage</option>
                    <option value="hunter">Hunter</option>
                    <option value="cleric">Cleric</option>
                </select>
            </span>
            <span>
                <label>Max HP</label>
                <input
                    title="Enter your max HP value"
                    type="text"
                    size="4"
                    name="totalHP"
                    value={form.totalHP}
                    onChange={handleChange} />
            </span>
            <div className='grid small'>
                <span>
                    <label>Spell Slots</label>
                    <input
                        type="text"
                        size="5"
                        name="totalSS"
                        value={form.totalSS}
                        onChange={handleChange} />
                </span>
                <span>
                    <label>Short Rests</label>
                    <input
                        type="text"
                        size="6"
                        name="totalSR"
                        value={form.totalSR}
                        onChange={handleChange} />
                </span>
            </div>
            <hr></hr>
            <span>
                <label>Description</label>
                <textarea rows={7} cols={35}
                    placeholder="Enter character description . . ."
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    className={styles.formTextarea}></textarea>
            </span>
                <button className={styles.btn} type="submit">Submit</button>
                <button className={styles.closeBtn} type="button" onClick={() => setAddCharacter(false)}>X</button>
        </form>
    )
};

export default CharacterForm;
