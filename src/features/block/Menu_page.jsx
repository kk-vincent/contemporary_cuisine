import React, { useState } from 'react';

import '../../style/pic_in.scss'

import Accordin from '../../components/menu/accordin';

import Appetizer1 from '../../pic/menu/Appetizer/Appetizer1.png';
import Appetizer2 from '../../pic/menu/Appetizer/Appetizer2.png';
import Appetizer3 from '../../pic/menu/Appetizer/Appetizer3.png';
import Appetizer4 from '../../pic/menu/Appetizer/Appetizer4.png';
import Appetizer5 from '../../pic/menu/Appetizer/Appetizer5.png';
import Appetizer6 from '../../pic/menu/Appetizer/Appetizer6.png';

import soup1 from '../../pic/menu/Soup/soup1.png';
import soup2 from '../../pic/menu/Soup/soup2.png';

import main1 from '../../pic/menu/Mains/main1.png';
import main2 from '../../pic/menu/Mains/main2.png';
import main3 from '../../pic/menu/Mains/main3.png';
import main4 from '../../pic/menu/Mains/main4.png';
import main5 from '../../pic/menu/Mains/main5.png';

import Dessert1 from '../../pic/menu/Dessert/Dessert1.png';
import Dessert2 from '../../pic/menu/Dessert/Dessert2.png';
import Dessert3 from '../../pic/menu/Dessert/Dessert3.png';
import Dessert4 from '../../pic/menu/Dessert/Dessert4.png';
import Dessert5 from '../../pic/menu/Dessert/Dessert5.png';

import Pre1 from '../../pic/menu/Pre/Pre1.png';
import Pre2 from '../../pic/menu/Pre/Pre2.png';

const MenuPage = ({ onClose }) => {
    const pics = {
        'Appetizer': [Appetizer1, Appetizer2, Appetizer3, Appetizer4, Appetizer5, Appetizer6],
        'Soup': [soup1, soup2],
        'Mains': [main1, main2, main3, main4, main5],
        'Pre': [Pre1, Pre2],
        'Dessert':[Dessert1,Dessert2,Dessert3,Dessert4,Dessert5]



    }
    const [currentPic, setCurrentPic] = useState(pics.Appetizer[0]);
    // const na = ['Appetizer', 'Soup', 'Mains', 'Pre', 'Dessert']
    const handleSelect = (selectedPic) => {
        setCurrentPic(selectedPic);
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content-box is-scrollable" onClick={(e) => e.stopPropagation()}>
                <div className='d-flex flex-column w-100 h-auto justify-content-center'>
                    <h2 className='text-center mb-5' style={{fontSize:'var(--home-card-title)', alignItems: 'flex-start', }}>菜品</h2>
                    <div className='row  '>

                        <div className="col-12 col-lg-8">
                            <div className='w-100 h-100 rounded-5' style={{border:'1px solid var(--home-num-color)',background:'var(--home-tages-bg)'}}>
                                <div className='d-flex w-100 h-75 justify-content-center'>
                                    <div className='w-100 h-100 p-3'>
                                        <img key={currentPic} src={currentPic} alt="菜色預覽" className='img-in img-fluid rounded-5 '/>
                                    </div >

                                </div>
                            </div >
                        </div>

                        <div className="d-flex col-12 col-lg-4 p-1">
                            <div className='w-100 h-100'><Accordin pics={pics} onSelectPic={(newPic) => setCurrentPic(newPic)}  /></div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default MenuPage;