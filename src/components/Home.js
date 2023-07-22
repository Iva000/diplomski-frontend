import logo from '../images/Logo.png';
import "../css/home.css";

function Home(){
    return(
        <body className='bodyHome'>
            <div className='containerHome'>
                <p className='paragraphHome'>Rezerviši svoj čas za ovu sezonu!</p>
                <img src={logo} alt='logo' className='photoHome'></img>
            </div>
        </body>
    );
}

export default Home;