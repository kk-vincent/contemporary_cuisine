import React from 'react';
import '../../style/block_page.scss';

import Left_Card from '../../components/hero/Left_card';
import Dsic from '../../components/hero/Dsic';

import cowry from '../../pic/cir/cowry_cir.png';
import chic from '../../pic/cir/chic_cir.png';
import pig from '../../pic/cir/pig_cir.png';
import shrimp from '../../pic/cir/shrimp_cir.png';
import deff from '../../pic/cir/deef_cir.png';


const HomePage = ({ activeIndex, onSelectIndex, onClose }) => {
    const data = [
        {
            num: '01',
            name: 'Poultry',
            title: '熟成岩生黑羽土雞',
            subtitle: 'Dry-Aged Black Feather Chicken',
            introduce: [
                '選用台灣岩生黑羽土雞，進行 7 日微氣候風乾熟成。慢火舒肥使',
                '其肉質保持滑嫩，最後以備長炭大火淬火 180 秒，逼出外皮豐腴',
                '雞油並附著煙燻炭香，佐以爐烤山椒汁。',
            ],
            tab: ['山林煙燻', '酥脆油脂', '細密彈性', '辛香山椒'],
        },
        {
            num: '02',
            name: 'Seafood',
            title: '極地低溫熟成干貝',
            subtitle: 'Arctic Dry-Seared Scallop',
            introduce: [
                '源自極寒海域、厚度達 32mm 的空運鮮活干貝。主廚以焦香奶油',
                '進行「Arrosé」淋油煎法，每面精準煎製 45 秒使外殼鎖定微焦金',
                '黃，內部依然保留如刺身般的軟嫩與海洋甜味。',
            ],
            tab: ['金黃奶香', '海洋礦物', '極致甘甜', '細嫩絲質'],
        },
        {
            num: '03',
            name: 'Beef',
            title: '日本A5和牛戰斧',
            subtitle: 'Wagyu Tomahawk Steak',
            introduce: [
                '極致奢華的 A5 等級日本黑毛和牛。經過 28 天精密喜馬拉雅鹽磚',
                '乾式熟成，凝聚其野性與堅果香氣。在 220°C 重型鑄鐵板上炙',
                '燒，表面焦糖化完美，內含雪花般的均勻油脂，入口即化。',
            ],
            tab: ['堅果乾酪', '焦糖化脆殼', '鵝肝級油脂', '深沉肉香'],
        },
        {
            num: '04',
            name: 'Seafood',
            title: '藍龍蝦刺身與松露醬',
            subtitle: 'Blue Lobster with Truffle',
            introduce: [
                '極其稀有的布列塔尼藍龍蝦。肉質緊緻，略帶天然甜味。刺身於',
                '-2°C 恆溫保存，上桌前以 1000°C 噴槍高溫炙燒表皮 12 秒喚醒',
                '甲殼香氣，澆淋特製 18% 比例頂級黑松露魚子醬汁。',
            ],
            tab: ['脆彈牙感', '炙燒焦香', '麝香松露', '鮮甜回甘'],
        },
        {
            num: '05',
            name: 'Pork',
            title: '西班牙伊比利橡實豬',
            subtitle: 'Iberico Pork Bellota Rack',
            introduce: [
                '100% 橡實餵飼的西班牙 Bellota 級黑豬。油脂富含不飽和脂肪',
                '酸，散發淡淡的橡果橡木清香。經 4.5 小時低溫慢烤，油脂徹底',
                '焦糖化，最後以 320°C 烈焰脆皮炙烤，酥嫩交融。',
            ],
            tab: ['橡果果香', '脆皮糖蜜', '柔嫩多汁', '草本幽香'],
        },
    ];

    const currentCard = data[activeIndex] || data[0];
    const { num, name, title, subtitle, introduce, tab } = currentCard;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content-box" onClick={(e) => e.stopPropagation()}>
                <div className="row justify-content-center align-items-center w-100 h-100 g-3">
                    <div
                        className="col-12 col-lg-7  d-flex justify-content-center align-content-center px-2 py-2 rounded-5"
                        style={{
                            background: 'var(--card-bg-color)',
                            border: 'var(--home-tags-bo) solid var(--home-tags-bo-col)',
                        }}
                    >
                        <Left_Card
                            num={num}
                            name={name}
                            title={title}
                            subtitle={subtitle}
                            introduce={introduce}
                            tab={tab}
                        />
                    </div>

                    <div className="col-12 col-lg-4 ">
                        <Dsic
                            pic1={chic}
                            pic2={cowry}
                            pic3={deff}
                            pic4={shrimp}
                            pic5={pig}
                            activeIndex={activeIndex}
                            onSelect={onSelectIndex} // 直接觸發父層的切換事件
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;