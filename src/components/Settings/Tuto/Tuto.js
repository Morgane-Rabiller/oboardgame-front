import "./Tuto.scss";
import homeTuto from "../../../assets/tuto/homeTuto.png";
import filterTuto from "../../../assets/tuto/filterTuto.png";
import boardgameTuto from "../../../assets/tuto/boardgameTuto.png";
import libraryTuto from "../../../assets/tuto/libraryTuto.png";
import addNote from "../../../assets/tuto/addNote.png";
import note from "../../../assets/tuto/note.png";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

const Tuto = () => { 
    const navigate = useNavigate();
    return (
        <div className="tuto m-5">
            <p className="font-bold">Salut !</p> <br></br>
            <p>Si tu est tombé ici, c'est que tu te demandes comment marche l'application.</p><br></br>
            <p>C'est très simple, je vais t'expliquer ça tout de suite 😊</p><br></br>
            <p className="underline">Pour commencer, la page principale :</p><br></br>
            <img src={homeTuto} alt="home" className="w-20rem"/><br></br><br></br>
            <p className="underline">Les filtres pour la sélection :</p><br></br>
            <img src={filterTuto} alt="filter" className="w-20rem"/><br></br><br></br>
            <p className="underline">La liste des jeux de société :</p><br></br>
            <img src={boardgameTuto} alt="boardgame" className="w-20rem"/><br></br><br></br>
            <p className="underline">La bibliothèque personnelle :</p><br></br>
            <img src={libraryTuto} alt="library" className="w-20rem"/><br></br><br></br>
            <p>Besoin de te rappeler que tu as prêté un jeu à quelqu'un ? <br/><br/> Ou besoin de spécifier quelque chose en particulier ? <br/><br/>  Ça tombe bien, cette fonctionnalité de note est justement faite pour ça. <br /><br/> Tu as seulement besoin de cliquer sur le nom du jeu pour lequel tu as besoin d'écrire une note et y glisser ta note.<br /><br/> Bien sûr, tu pourras modifier ou supprimer ta note à tout moment. </p><br></br>
            <img src={addNote} alt="addNote" className="w-20rem"/><br></br><br></br>
            <p>Tu sauras si le jeu contient une note ou non, si le nom du jeu est coloré, comme ci-dessous :</p><br></br>
            <img src={note} alt="note" className="w-20rem"/><br></br><br></br>
            <p>Et voilà !<br></br>Maintenant tu as tous les éléments pour utiliser correctement ton application, bonne soirée et bonne game ! 😉</p><br></br>

            <div className="text-center ">
                <Button type="button" onClick={() => navigate("/parametres")}>Retour</Button>
            </div>
        </div>
    );
};

export default Tuto;