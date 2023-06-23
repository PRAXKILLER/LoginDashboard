import './Schedule.css';
import { AiOutlineRight } from 'react-icons/ai';
function Schedule() {
    return (
        <div className='schedule'>
            <div className='schedule_head' >
                <h3>Toady's Schedule</h3>
                <p>See all</p>
                <AiOutlineRight/>
            </div>
            <div className='schedule_cont1'>
                <h5>Meeting with suppliers with Kutta Bali</h5>
                <p>14:00 - 15:00</p>
                <p>At Sunset Road, Kutta, Bali</p>
            </div>
            <div className='schedule_cont1'>
                <h5>Check Operations at Giga Factory 1</h5>
                <p>18:00 - 20:00</p>
                <p>At Central Jakarta</p>
            </div>
        </div>
    );
}

export default Schedule;