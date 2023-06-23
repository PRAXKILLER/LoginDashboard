import './Navbar.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdNotificationsOutline } from 'react-icons/io';
function NavBar() {
    return (
        <div className='navBar'>
            <h2 className='navBar_head'>Dashboard</h2>
            <div className='navBar_search'>
                <input type='text' className='navBar_search_input' placeholder='Search..' />
                <AiOutlineSearch className='navBar_search_icon'/>
            </div>
            <IoMdNotificationsOutline className='navBar_notify' />
            <img alt='' className="navBar_profile"/>
        </div>
    );
}

export default NavBar;