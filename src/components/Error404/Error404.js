import { Link } from "react-router-dom";

const Error404 = () => {
    let link;
    const logged = localStorage.getItem("logged");
    link = logged ? "/selection-aleatoire" : "/connexion";
    
    return (
        <div className="error mt-5">
            <h1 className="font-bold text-center">Erreur 404</h1>
            <p className="text-center mt-2">Cette page n'existe pas.</p>
            <div className="text-center mt-5">
            <Link to={link} className="text-center border-1 p-2 border-purple-700 border-round-3xl bg-purple-700">Retour</Link>
            </div>
        </div>
    );
};

export default Error404;
