import React from 'react';


const Nav_Link = ({ onHomeOpen,onMenuOpen,onAboutOpen,className='' }) => {

    
    return (
        <div className={`d-flex justify-content-end align-items-end h-100 gap-5 ${className}`}>
            <div className="">
                <button className='btn btn-dark' href="#" 
                    onClick={(e) => {e.preventDefault();
                        console.log('1. 點擊了 Home');
                    if (onHomeOpen) onHomeOpen();
                    else console.error('onHomeOpen 沒有傳進來！');
                    }}>
                    Home // 首頁
                </button>
            </div>

            <div className="">
                <button 
                    className='btn btn-dark' 
                    href="#" 
                    onClick={(e) => {
                        e.preventDefault();
                        if(onMenuOpen) onMenuOpen();
                        else console.error('onMenuOpen 沒有傳進來！');
                    }}
                >
                    Menu // 菜單
                </button>
            </div>

            <div className="">
                <button className='btn btn-dark' href="#" 
                onClick={(e) =>{ 
                e.preventDefault();
                if(onAboutOpen) onAboutOpen();
                else console.error('onAboutOpen 沒有傳進來！');
                }}>
                    About // 關於
                </button>
            </div>
        </div>
    );
};

export default Nav_Link;