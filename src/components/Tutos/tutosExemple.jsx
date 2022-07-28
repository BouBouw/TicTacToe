import { Link } from "react-router-dom";
import './tutos.css';

const Exemple = () => {
    return(
        <div className=''>
            <a className="title">Didacticiel : Tic Tac Toe</a>
            <div className='content'>
                
            </div>
            <div className="social">
                <div className="twitter">
                    <img src="https://cdn-icons-png.flaticon.com/512/124/124021.png" className="logo"></img>
                </div>
                <div className="github">
                    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" className="logo"></img>
                </div>
                <div className="portfolio">
                    <img src="https://cdn.icon-icons.com/icons2/836/PNG/512/Google_Chrome_icon-icons.com_66794.png" className="logo"></img>
                </div>
            </div>
            <a className="username">@BouBouw</a>
            <div className='next'>
                <button className="gameStart"><Link to="/player"> Démarrer la partie</Link></button>
            </div>
        </div>
    );
}

export default Exemple;