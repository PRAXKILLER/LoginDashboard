import './Products.css';
import { CChart } from '@coreui/react-chartjs';
import { IoIosArrowDown } from 'react-icons/io';
import { BsFillCircleFill } from 'react-icons/bs';

function Products() {
    return (
        <div className="products">
            <div className='products_head'>
                <h3> Products</h3>
                <p>May-June 2021</p>
                <IoIosArrowDown className='products_head_icon' />
            </div>
            <div className='products_body'>
                <div className='products_body_pie'>
                <CChart
                        type="polarArea"
                        data={{
                            labels: ['Red', 'Green', 'Yellow'],
                            datasets: [
                            {
                                data: [55, 31, 14],
                                backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56'],
                            },
                            ],
                        }}
                        />
                </div>
                <div className='products_body_text'>
                    <div className='products_body_text_container'>
                        <div className='cont1 hh'>
                            <BsFillCircleFill className='cont1_circle1' />
                            <h4>Basic Tees</h4>
                        </div>
                        <p>55%</p>
                    </div>
                    <div className='products_body_text_container'>
                        <div className='cont2 hh'>
                            <BsFillCircleFill className='cont2_circle' />
                            <h4>Custom Short Pants</h4>
                        </div>
                        <p>31%</p>
                    </div>
                    <div className='products_body_text_container'>
                        <div className='cont3 hh'>
                            <BsFillCircleFill className='cont3_circle' />
                            <h4>Super Hoodies</h4>
                        </div>
                        <p>14%</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;