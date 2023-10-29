import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {

    const [btnName, setButtonName] = useState('Login');

    return <div className="header">
        <div className='logo'>
            <img src={LOGO_URL}></img>
        </div>

        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <button className="login-button" onClick={() => { setButtonName(btnName === 'Login' ? 'Logout' : 'Login') }}>{btnName}</button>
            </ul>
        </div>
    </div>
}

export default Header;