import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { useNavigate, Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";

const Header = () => {

    const [btnName, setButtonName] = useState('Login');
    const navigate = useNavigate();

    const onlineStatus = useOnlineStatus();

    useEffect(() => {
        console.log('useEffect');
    }, [btnName])

    return <div className="flex justify-between items-center shadow-lg mb-1">
        <div className='logo pl-2'>
            <img className="w-28" src={LOGO_URL}></img>
        </div>

        <div className="nav-items">
            <ul className="flex p-2 m-2">
                {/* <li><a href="#" onClick={() => { navigate('/') }}>Home</a></li>
                <li><a href="#" onClick={() => { navigate('/about-us') }}>About Us</a></li>
                <li> <a href="#" onClick={() => { navigate('/contact-us') }}>Contact Us</a></li> */}

                <li className="m-4">Online status : {onlineStatus ? 'Green' : 'Red'}</li>
                <li className="m-4"><Link to="/">Home</Link></li>
                <li className="m-4"><Link to="/about-us" >About Us</Link></li>
                <li className="m-4"><Link to="/contact-us">Contact Us</Link></li>

                <li className="m-4">Cart</li>
                <button className="login-button p-2 h-12 rounded border-2 shadow-xl" onClick={() => { setButtonName(btnName === 'Login' ? 'Logout' : 'Login') }}>{btnName}</button>
            </ul>
        </div>
    </div>
}

export default Header;