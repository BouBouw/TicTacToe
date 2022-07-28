import { Link } from "react-router-dom";
import './options.css';

const Options = () => {
    let i = 0;
    function selector(evt, cityName) {
        const tablinks = document.getElementsByClassName("select-item");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        //const tabcontent = document.getElementsByClassName("tabcontent");
        //for (i = 0; i < tabcontent.length; i++) {
        //    tabcontent[i].style.display = "none";
        //}

        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";

        document.getElementById("defaultOpen").click();
    }

    return(
        <div className="">
            <div className='selector'>
                <ul className="select-items">
                    <li className="select-item">
                        <p className="btn active" onClick={(event) => selector(event, 'three')} id="defaultOpen">(Par défaut) 3x3</p>
                    </li>
                    <li className="select-item">
                        <p className="btn" onClick={(event) => selector(event, 'five')}>5x5</p>
                    </li>
                    <li className="select-item">
                        <p className="btn" onClick={(event) => selector(event, 'ten')}>10x10</p>
                    </li>
                    <li className="select-item">
                        <p className="btn" onClick={(event) => selector(event, 'fifteen')}>15x15</p>
                    </li>
                    <li className="select-item">
                        <p className="btn" onClick={(event) => selector(event, 'twenty-one')}>21x21</p>
                    </li>
                </ul>
            </div>
            <div className="tabcontent" id="three">
                <div className='grid-3'>
                    <div id='c1' className='case'></div>
                    <div id='c2' className='case'></div>
                    <div id='c3' className='case'></div>
                    <div id='c4' className='case'></div>
                    <div id='c5' className='case'></div>
                    <div id='c6' className='case'></div>
                    <div id='c7' className='case'></div>
                    <div id='c8' className='case'></div>
                    <div id='c9' className='case'></div>
                </div>
            </div>
            <div className="tabcontent" id="five">
                <div className='grid-5'>
                    <div id='c1' className='case'></div>
                    <div id='c2' className='case'></div>
                    <div id='c3' className='case'></div>
                    <div id='c4' className='case'></div>
                    <div id='c5' className='case'></div>
                    <div id='c6' className='case'></div>
                    <div id='c7' className='case'></div>
                    <div id='c8' className='case'></div>
                    <div id='c9' className='case'></div>
                    <div id='c10' className='case'></div>
                    <div id='c11' className='case'></div>
                    <div id='c12' className='case'></div>
                    <div id='c13' className='case'></div>
                    <div id='c14' className='case'></div>
                    <div id='c15' className='case'></div>
                    <div id='c16' className='case'></div>
                    <div id='c17' className='case'></div>
                    <div id='c18' className='case'></div>
                    <div id='c19' className='case'></div>
                    <div id='c20' className='case'></div>
                    <div id='c21' className='case'></div>
                    <div id='c22' className='case'></div>
                    <div id='c23' className='case'></div>
                    <div id='c24' className='case'></div>
                    <div id='c25' className='case'></div>
                </div>
            </div>
            <div className="tabcontent" id="ten">
                <div className='grid-10'>
                    <div id='c1' className='case'></div>
                    <div id='c2' className='case'></div>
                    <div id='c3' className='case'></div>
                    <div id='c4' className='case'></div>
                    <div id='c5' className='case'></div>
                    <div id='c6' className='case'></div>
                    <div id='c7' className='case'></div>
                    <div id='c8' className='case'></div>
                    <div id='c9' className='case'></div>
                    <div id='c10' className='case'></div>
                    <div id='c11' className='case'></div>
                    <div id='c12' className='case'></div>
                    <div id='c13' className='case'></div>
                    <div id='c14' className='case'></div>
                    <div id='c15' className='case'></div>
                    <div id='c16' className='case'></div>
                    <div id='c17' className='case'></div>
                    <div id='c18' className='case'></div>
                    <div id='c19' className='case'></div>
                    <div id='c20' className='case'></div>
                    <div id='c21' className='case'></div>
                    <div id='c22' className='case'></div>
                    <div id='c23' className='case'></div>
                    <div id='c24' className='case'></div>
                    <div id='c25' className='case'></div>
                </div>
            </div>
            <div className="tabcontent" id="fifteen">

            </div>
            <div className="tabcontent" id="twenty-one">

            </div>
            <div className='options'>
                <div className='start'>
                    <button className='gameStart'><Link to="/didacticiel"> Démarrer la partie</Link></button>
                </div>
            </div>
        </div>
    )
}


export default Options;