import "./Home.scss";

const Home = () => {
    return (
        <div className="home">
            <div className="home_description">
                <p>
                    <span> -&gt; Crée ta bibliothèque en y ajoutant tes jeux </span><br/>
                    <span> -&gt; Et c'est parti ! </span><br/>
                    <span> -&gt; L'application sélectionnera pour toi un jeu</span></p>
            </div>
            <div className="home_button-container">
                <button className="home_button">Je me connecte</button>
            </div>
        </div>
    );
};

export default Home;
