import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { useNavigate, Link } from "react-router-dom";

const Header = () => {

    const [btnName, setButtonName] = useState('Login');
    const navigate = useNavigate();

    useEffect(() => {
        console.log('useEffect');
    }, [btnName])

    return <div className="header">
        <div className='logo'>
            <img src={LOGO_URL}></img>
        </div>

        <div className="nav-items">
            <ul>
                {/* <li><a href="#" onClick={() => { navigate('/') }}>Home</a></li>
                <li><a href="#" onClick={() => { navigate('/about-us') }}>About Us</a></li>
                <li> <a href="#" onClick={() => { navigate('/contact-us') }}>Contact Us</a></li> */}

                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-us" >About Us</Link></li>
                <li><Link to="/contact-us">Contact Us</Link></li>

                <li>Cart</li>
                <button className="login-button" onClick={() => { setButtonName(btnName === 'Login' ? 'Logout' : 'Login') }}>{btnName}</button>
            </ul>
        </div>
    </div>
}

export default Header;