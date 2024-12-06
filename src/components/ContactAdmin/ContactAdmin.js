import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { eraseMessages, sendMail } from "../../actions/contact";
import { Message } from "primereact/message";
import { useNavigate } from "react-router-dom";
import Loading from "../Loader/Loader";


const ContactAdmin = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const logged = localStorage.getItem("logged");
    const currentEmail = useSelector((state) => state.userReducer.email);
    const successMessage = useSelector((state) => state.contactReducer.success);
    const [displaySuccess, setDisplaySuccess] = useState(false);
    const [displayError, setDisplayError] = useState(false);
    const errorMessage = useSelector((state) => state.contactReducer.error);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        if (logged) {
            setEmail(currentEmail);
        }

        if (successMessage) {
            setDisplaySuccess(true);
            setTimeout(() => {
                dispatch(eraseMessages());
                setDisplaySuccess(false);
                setLoading(false);
                navigate("/connexion");
            }, 2000);
        }
        
        if (errorMessage) {
            console.log("errorMessage", errorMessage);
            
            setDisplayError(true);
            setLoading(false);
            setTimeout(() => {
                dispatch(eraseMessages());
                setDisplayError(false);
            }, 2000);
        }
    }, [currentEmail, logged, errorMessage, successMessage, navigate, dispatch])
    
    const [object, setObject] = useState("");
    const [message, setMessage] = useState("");

        
    const handleForm = (e) => {
        e.preventDefault();
        dispatch(sendMail(email, object, message));
        setLoading(true);
    }

    return (
        <div>
            {displaySuccess &&  <div className="text-center"><Message severity="success" text={successMessage} /></div>}
            <h1 className="text-center mt-5">Contacter l'administrateur</h1>
            {loading && <Loading />}
            <form onSubmit={e => handleForm(e)}>
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
                {displayError && <p className="text-red-400 mt-3 text-center">{errorMessage}</p>}
                <div className="flex justify-content-around mx-5 mt-3">
                    <Button  type="submit" className="mb-5 w-4 flex justify-content-center text-sm">Envoyer</Button>
                    <Button type="button" className="mb-5 w-4 flex justify-content-center text-sm">Retour</Button>
                </div>
            </form>
        </div>
    );
};

export default ContactAdmin;