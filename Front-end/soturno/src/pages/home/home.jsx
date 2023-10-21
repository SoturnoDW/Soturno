import './home.scss';
import Header from '../../components/header/Header.jsx';

import { Link } from 'react-router-dom';


export default function Home() {

    return (
        <body class="pagina-home">
            <section>

                <Header/>

                <main>

                    <p>
                        Na Soturno, a magia ganha vida! Prepare-se para entrar em um mundo repleto de mistério,
                        maravilha e poderes sobrenaturais. Seja você um bruxo experiente ou um curioso novato,
                        a Poções e Feitiços Mágicos é o lugar perfeito para explorar o inexplicável.
                    </p>

                </main>

            </section>
        </body>
    )

}