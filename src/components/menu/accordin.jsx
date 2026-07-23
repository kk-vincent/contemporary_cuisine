import React from "react";

const Accordin = ({pics, onSelectPic}) => {
    const title = ['前菜 Appetizer', '湯品 Soup', '主菜 Mains', '前甜點 Pre-Dessert', '主甜點 Main Dessert']
    const na = ['Appetizer', 'Soup', 'Mains', 'Pre', 'Dessert']
    const menus = {
        Appetizer: ['澎湖小卷塔塔', '煙燻魚子醬', '發酵青梅', '炭烤白蘆筍', '熟成帕瑪森乳酪泡泡', '榛果碎'],
        Soup: ['法式澄清黑羽土雞湯', '乾香菇精粹'],
        Mains: ['熟成岩生黑羽土雞', '極地低溫熟成干貝', '藍龍蝦刺身 │ 頂級松露醬', '西班牙伊比利橡實豬', '日本 A5 和牛戰斧'],
        Pre: ['大吟釀清酒雪酪', '台灣黃檸檬碎屑'],
        Dessert: ['70% 煙燻黑巧克力慕斯', '鹽之花焦糖脆片', '泥煤威士忌冰淇淋', '急凍草莓大黃根',  '羊乳酪雪花']
    }

    return (
            <div className="d-flex flex-column  accordion accordion-flush rounded-4 border " id="accordionFlushExample" style={{ overflow: 'hidden', borderColor: 'var(--block-border-color)'}} >
                {title.map((ti, idx) => (
                    <div className="accordion-item" key={idx} style={{backgroundColor:'var(--block-bg-color)',borderColor:'var(--block-border-color)'}}>

                        <h2 className="accordion-header" id={`flush-heading${idx} `}>
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#flush-collapse${idx}`}
                                aria-expanded="false"
                                aria-controls={`flush-collapse${idx}`}

                                 style={{backgroundColor:'var(--block-border-color)',borderColor:'var(--block-border-color)',color:'var(--bg-color)'}}
                            >
                                {ti}
                            </button>
                        </h2>

                        <div
                            id={`flush-collapse${idx}`}
                            className="accordion-collapse collapse"
                            aria-labelledby={`flush-heading${idx}`}
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body p-0 m-0">

                                <ul className="w-100 p-0" style={{ listStyle: "none", }}>
                                    {menus[na[idx]]?.map((me, num) => (
                                        <li className="w-100 border-bottom text-center py-2" key={num}>
                                            <a onClick={(e) =>{
                                                e.preventDefault();
                                                const selectedPic = pics[na[idx]]?.[num];
                                                if (selectedPic) onSelectPic(selectedPic);
                                            }
                                            }  className="d-block " style={{ textDecoration: 'none', cursor:'pointer', color:'var(--font-color)',borderColor:'var(--block-border-color)'}}  >{me}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
    )
}
export default Accordin