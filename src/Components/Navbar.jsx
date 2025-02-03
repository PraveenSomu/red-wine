
import { Link } from 'react-router-dom';
import './Navbar_style.css';
import { PiWineFill } from "react-icons/pi";



function Navbar() {
    return (
        <>
            <div className="row">
            <div className="navbar col-lg-12">
                <div className="logo"><PiWineFill id='winelogo' /> Red Wine Café <span>!</span></div>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/shop"><li>Shop</li></Link>
                    <Link to="/events"><li>Event</li></Link>
                    <Link to="/menu"><li>Menu</li></Link>
                    <Link to="/reservation"><li>Reservation</li></Link>

                    <a id="twt" class="fa fa-twitter " href="https://x.com/?lang=en"></a>
                    <a id="insta" class="fa fa-instagram " href="https://www.instagram.com/santa_pyaar_praveenn?igsh=bjA4ankwem54bXg="></a>
                    <a id="whts" class="fa fa-whatsapp" href="https://web.whatsapp.com/"></a>


                </ul>

            </div>
            </div>



        </>
    );
};

export default Navbar;