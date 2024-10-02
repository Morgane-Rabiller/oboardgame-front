import { useNavigate } from "react-router-dom";
import "./Home.scss";

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="home">
            <div className="home_description">
                <p className="home_p">
                    <span> -&gt; Tu es en soirée jeu de société avec tes amis et vous ne savez pas quel jeu choisir ? </span><br/>
                    <span> -&gt; Crée ta bibliothèque en y ajoutant tes jeux à partir de la liste des jeux de société</span><br/>
                    <span> -&gt; Et c'est parti ! </span><br/>
                    <span> -&gt; L'application sélectionnera pour toi un jeu</span>
                </p>
            </div>
            <div className="home_button-container">
                <button className="home_button" onClick={() => navigate("/connexion")}>Je me connecte</button>
            </div>
        </div>
    );
};

export default Home;
