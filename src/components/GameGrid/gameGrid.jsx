import './game.css';

const GameGrid = () => {
    let cases = [...document.getElementsByClassName('case')];

    let player = document.getElementById('playerGame');

    let popup = document.getElementById('alert');
    let popupDesc = document.getElementById('description');

    let state = {
        player: 1,
        c1: 0,
        c2: 0,
        c3: 0,
        c4: 0,
        c5: 0,
        c6: 0,
        c7: 0,
        c8: 0,
        c9: 0,
    }

    const resetState = () => {
        state.player = 1;
        state.c1 = 0;
        state.c2 = 0;
        state.c3 = 0;
        state.c4 = 0;
        state.c5 = 0;
        state.c6 = 0;
        state.c7 = 0;
        state.c8 = 0;
        state.c9 = 0;
    }

    function resetGame() {
        cases.forEach(async (c) => {
            c.textContent = "";
        })
        popup.style.display = 'none';
    }

    async function AI(e) {
        // Fonction d'intelligence artificielle :
        if(state.player === 2) {
            console.log('Intelligence Artificielle');
            let casesVoid = cases.forEach(async (case_vide) => {
                let array = [];

                let caseId = case_vide.id;
                array.push(caseId);

                await array.forEach(async (allCase) => {
                    let newState = state[allCase];
                    if(newState === 0) {
                        e.target.textContent = 'o';
                    }
                })
            })
        }
    }

    const checkVictory = () => {
        if(
            (state.c1 === state.c2 && state.c2 === state.c3 && state.c1 > 0) || 
            (state.c1 === state.c4 && state.c4 === state.c7 && state.c1 > 0) ||
            (state.c1 === state.c5 && state.c5 === state.c9 && state.c1 > 0) ||
            (state.c2 === state.c5 && state.c5 === state.c8 && state.c2 > 0) ||
            (state.c3 === state.c6 && state.c6 === state.c9 && state.c3 > 0) ||
            (state.c4 === state.c5 && state.c5 === state.c6 && state.c4 > 0) ||
            (state.c7 === state.c8 && state.c8 === state.c9 && state.c7 > 0) 
        ) {
            return true;
        } else if(
            state.c1 !== 0 &&
            state.c2 !== 0 &&
            state.c3 !== 0 &&
            state.c4 !== 0 &&
            state.c5 !== 0 &&
            state.c6 !== 0 &&
            state.c7 !== 0 &&
            state.c8 !== 0 &&
            state.c9 !== 0
        ) {
            return null;
        } else {
            return false;
        }
    }

    const playCases = (e) => {
        let idCase = e.target.id;
        if(state[idCase] !== 0) return;

        state[idCase] = state.player;

        let isVictory = checkVictory();
        if(isVictory === true) {
            resetState();
            cases.forEach(async (c) => {
                c.textContent = "";
            })

            popup.style.display = 'block';
            popupDesc.textContent = `La gagnant est: Joueur ${state.player}`;
        } else if(isVictory === null) {
            resetState();
            cases.forEach(async (c) => {
                c.textContent = "";
            })

            popup.style.display = 'block';
            popupDesc.textContent = `Aucun joueur n'a gagner la partie.`;
        } else if(isVictory === false) {
            if(state.player === 1) {
                e.target.textContent = 'x';
                state.player = 2;

                player.style.color = 'rgb(250, 60, 60)';
                player.textContent = 'Ordinateur';
            } else {
                AI(e);

                //e.target.textContent = 'o';
                state.player = 1;

                player.style.color = 'rgb(98, 205, 255)';
                player.textContent = 'Vous';
            }
        } 
    }

    cases.forEach(async (element) => {
        element.addEventListener('click', playCases);
    })

    return(
        <div className=''>
            <div className='players'>
                <div className='player' id='playerGame'>
                    <a className='playerText' id='textGame'>[]</a>
                </div>
            </div>
            <div className='grid'>
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
            <div className='bottom'>
                <a className='timer' id='time'>Bonne chance !</a>
            </div>
            <div className='alertBox' id='alert'>
                <a className='boxTitle'>Partie terminée ! 🎉</a>
                <p className='boxDescription' id="description">Aucun joueur n'a gagner la partie.</p>
                <button className='boxReset' onClick={(event) => resetGame()}>Rejouer</button>
            </div>
        </div>
    )
}


export default GameGrid;