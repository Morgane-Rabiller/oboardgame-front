import { useRef, useState, useMemo } from "react";
import { OverlayPanel } from 'primereact/overlaypanel';
import { InputTextarea } from 'primereact/inputtextarea';
import "../Library/Library.scss";
import { Button } from "primereact/button";
import { useDispatch, useSelector } from "react-redux";
import { addNote, deleteNote, hasNote, removeNote } from "../../actions/note";

const TableDatas = ({ noteId, name, playerMin, playerMax, type, age, time, isEditing }) => {
    const notes = useSelector((state) => state.noteReducer.notes);
    const noteData = useMemo(() => notes[noteId] || {}, [notes, noteId]);
    const [value, setValue] = useState('');
    const [classButton, setClassButton] = useState("text-sm mr-2 bg-purple-200 border-purple-200");
    const [showError, setShowError] = useState(false);
    const op = useRef(null);
    const dispatch = useDispatch();

    const handleClick = (e) => {
        // setHasNote(true);
        if (!isEditing) {
            op.current.toggle(e);
        }
    };

    const handleChange = (e) => {
        setValue(e.target.value);
        setClassButton(e.target.value === "" ? "text-sm mr-2 bg-purple-200 border-purple-200" : "text-sm mr-2");
    };

    const handleAddNote = () => {
        if (value !== "" ) {
            dispatch(hasNote(noteId));
            dispatch(addNote(value, noteId));
        } else {
            setShowError(true);
            window.setTimeout(() => {
                setShowError(false);
            }, 2000);
        }
    };
    const handleUpdateNote = (e) => {
        dispatch(removeNote(noteId));
    };
    const handleDeleteNote = (e) => {
        dispatch(deleteNote(noteId));
        // dispatch(removeNote());
        setValue("");
        op.current.hide(e);
    };

    return (
        <>
            <td className={noteData.hasNote ? "text-green-500" : ""} onClick={(e) => handleClick(e)}>{name}</td>
            <OverlayPanel ref={op} className="p-2 w-20rem">
                <div className="flex">
                    <i className="pi pi-pen-to-square mr-2"></i>
                    <p className="font-bold text-sm mb-3">Veux-tu ajouter une note pour {name} ?</p>
                </div>
                {!noteData.hasNote ? 
                    <>
                        <InputTextarea value={value} className="ml-4 mb-2 h-4rem" onChange={(e) => handleChange(e)} rows={5} cols={30} /> 
                        {showError && <p className="text-red-500">Pas de note.</p>}
                        <div className="flex justify-content-end">
                            <Button className={classButton} type="button" onClick={() => handleAddNote()}>Ajouter</Button>
                        </div>
                    </>
                : 
                    <>
                        <p>{noteData.note}</p>
                        <div className="flex justify-content-end mt-2">
                            <Button className="text-sm mr-2" type="button" onClick={() => handleUpdateNote()}>Modifier</Button>
                            <Button className="text-sm" onClick={() => handleDeleteNote()}>Supprimer</Button>
                        </div>
                    </>}
            </OverlayPanel>
            <td>{playerMin} - {playerMax}</td>
            <td>{type}</td>
            <td>{age}+</td>
            <td>{time}</td>
        </>
    );
};

export default TableDatas;