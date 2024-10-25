import { useRef, useState } from "react";
import { OverlayPanel } from 'primereact/overlaypanel';
import { InputTextarea } from 'primereact/inputtextarea';
import "../Library/Library.scss";
import { Button } from "primereact/button";

const TableDatas = ({ name, playerMin, playerMax, type, age, time }) => {
    const [hasNote, setHasNote] = useState(false);
    const [value, setValue] = useState('');
    const op = useRef(null);

    const handleClick = (e) => {
        setHasNote(true);
        op.current.toggle(e)
    };

    return (
        <>
            <td className={hasNote ? "text-green-500" : ""} onClick={(e) => handleClick(e)}>{name}</td>
            <OverlayPanel ref={op} className="p-2 w-20rem">
                <div className="flex">
                    <i className="pi pi-pen-to-square mr-2"></i>
                    <p className="font-bold text-sm mb-3">Veux-tu ajouter une note pour {name} ?</p>
                </div>
                <InputTextarea value={value} className="ml-4 mb-2 h-4rem" onChange={(e) => setValue(e.target.value)} rows={5} cols={30} />
                <div className="flex justify-content-end">
                    <Button className="text-sm mr-2">Ajouter</Button>
                    <Button className="text-sm">Annuler</Button>
                </div>
                
            </OverlayPanel>
            <td>{playerMin} - {playerMax}</td>
            <td>{type}</td>
            <td>{age}+</td>
            <td>{time}</td>
        </>
    );
};

export default TableDatas;