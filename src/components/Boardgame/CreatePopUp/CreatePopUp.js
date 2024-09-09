import "./CreatePopUp.scss";
import { InputText } from "primereact/inputtext";
import { useState } from "react";

const CreatePopUp = () => {
    const [value, setValue] = useState('');
    return (
        <div>
            <InputText type="text" value={value} className="p-inputtext-sm" onChange={(e) => setValue(e.target.value)} placeholder="Nom du jeu"/>
        </div>
    )
}

export default CreatePopUp;