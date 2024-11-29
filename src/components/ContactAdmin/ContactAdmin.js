import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


const ContactAdmin = () => {
    const [email, setEmail] = useState("");
    const logged = localStorage.getItem("logged");
    const currentEmail = useSelector((state) => state.userReducer.email);
    useEffect(() => {
        if (logged) {
            setEmail(currentEmail);
        }
    }, [currentEmail, logged])
    
    const [object, setObject] = useState("");
    const [message, setMessage] = useState("");

    return (
        <div>
            <h1 className="text-center mt-5">Contacter l'administrateur</h1>
            <form>
                <div className="flex flex-column w-8 m-auto mt-5">
                    <label className="mb-2 text-sm">Adresse mail</label>
                    <InputText className="text-sm" value={email} onChange={(e) => setEmail(e.target.value)}></InputText>
                </div>
                <div className="flex flex-column w-8 m-auto mt-3">
                    <label className="mb-2 text-sm">Objet</label>
                    <InputText className="text-sm" value={object} onChange={(e) => setObject(e.target.value)}></InputText>
                </div>
                <div className="flex flex-column w-8 m-auto mt-3">
                    <label className="mb-2 text-sm">Message</label>
                    <InputTextarea className="text-sm" rows={5} cols={30} value={message} onChange={(e) => setMessage(e.target.value)}></InputTextarea>
                </div>
                <div className="flex justify-content-around mx-5 mt-3">
                    <Button className="mb-5 w-4 flex justify-content-center text-sm">Envoyer</Button>
                    <Button className="mb-5 w-4 flex justify-content-center text-sm">Retour</Button>
                </div>
            </form>
        </div>
    );
};

export default ContactAdmin;