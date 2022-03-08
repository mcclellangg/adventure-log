import styles from '../styles/CharacterForm.module.css';
import { useState } from "react";

const CharacterForm = ({characterList, setCharacterList}) => {
    const MAX_LEVEL = [...Array(20).keys()];
    const [form, setForm] = useState({
        characterName: "",
        class: "warrior",
        level: 1,
        totalHP: "",
        totalSS: "",
        totalSR: "",
        description: "Enter character description . . ."
    });

    const handleChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        setForm({
            ...form,
            [name] : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Character Info Submitted!')
        console.log(form);
        setCharacterList([...characterList, form])
    };

    return (
        <form className={styles.form_character} onSubmit={handleSubmit}>
            <span>
                <label>Character Name</label>
                <input
                type="text"
                name="characterName"
                onChange={handleChange}
                value={form.characterName}/>
            </span>
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
                <label>Level</label>
                <select name="level" value={form.level} onChange={handleChange}>
                    {MAX_LEVEL.map((level) => {
                        return <option key={level}>{level + 1}</option>;
                    })}
                </select>
            </span>
            <span>
                <label>Total HP</label>
                <input
                type="text"
                size="4"
                name="totalHP"
                value={form.totalHP}
                onChange={handleChange}/>
            </span>
            <span>
                <label>Total SS</label>
                <input
                type="text"
                size="4"
                name="totalSS"
                value={form.totalSS}
                onChange={handleChange}/>
            </span>
            <span>
                <label>Total SR</label>
                <input
                type="text"
                size="4"
                name="totalSR"
                value={form.totalSR}
                onChange={handleChange}/>
            </span>
            <span>
                <label>Description</label>
                <textarea rows={15} cols={42}
                name="description"
                value={form.description}
                onChange={handleChange}></textarea>
            </span>
            <button className={styles.submit_btn} type="submit">Submit</button>
        </form>
    )
};

export default CharacterForm;
