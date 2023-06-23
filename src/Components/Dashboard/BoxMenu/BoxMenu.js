import './Boxmenu.css';
import { BsFillWebcamFill, BsTags } from 'react-icons/bs';
import { AiOutlineLike } from 'react-icons/ai';
import { PiUsersLight } from 'react-icons/pi';
function BoxMenu() {
    return (
        <div className='boxMenu'>
            <div className='box_container bg-1'>
                <div className='box_container_sub'>
                    <p>Total Revenues</p>
                    <h4>$2,129,430</h4>
                </div>
                <BsFillWebcamFill className='box_container_icon'/>
            </div>
            <div className='box_container bg-2'>
                <div className='box_container_sub'>
                    <p>Total Transaction</p>
                    <h4>1250</h4>
                </div>
                <BsTags className='box_container_icon'/>
            </div>
            <div className='box_container bg-3'>
                <div className='box_container_sub'>
                    <p>Total Revenues</p>
                    <h4>$2,129,430</h4>
                </div>
                <AiOutlineLike className='box_container_icon'/>
            </div>
            <div className='box_container bg-4'>
                <div className='box_container_sub'>
                    <p>Total Revenues</p>
                    <h4>$2,129,430</h4>
                </div>
                <PiUsersLight className='box_container_icon'/>
            </div>
        </div>
    );
}

export default BoxMenu;