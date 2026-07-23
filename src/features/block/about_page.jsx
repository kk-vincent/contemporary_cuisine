import React from 'react';
import '../../style/block_page.scss';

import Dsic from '../../components/hero/Dsic';


import card1 from '../../pic/about/card1.png';
import card2 from '../../pic/about/card2.png';
import card3 from '../../pic/about/card3.png';
import card4 from '../../pic/about/card4.png';

import ScrollAnimation_L from '../../components/about/scrollanimate_L';
import ScrollAnimation_pic_L from '../../components/about/scrollanimate_pic_L';
import ScrollAnimation_R from '../../components/about/scrollanimate_R';
import ScrollAnimation_pic_R from '../../components/about/scrollanimate_pic_R';
import ScrollAnimation_T from '../../components/about/scrollanimate_T';
import ScrollAnimation_T2 from '../../components/about/scrollanimate_T2';


const AboutPage = ({ onClose }) => {

    return (
        <div className="modal-overlay" onClick={onClose}>
    <div className="modal-content-box is-scrollable" onClick={(e) => e.stopPropagation()}>

        <div className='d-flex justify-content-center flex-column w-100'>

            <div className='d-flex flex-column'>

                <div className='d-flex flex-column justify-content-center w-100 '>
                    <ScrollAnimation_T>
                        <div className='d-flex justify-content-center my-5 mt-4'>
                            <h1 style={{ fontSize: 'var(--home-card-title)' }}>THE ART OF PRECISION │ 關於工坊</h1>
                        </div>
                    </ScrollAnimation_T>
                    <div className='w-75 mx-auto' style={{ fontSize: 'var(--home-card-p)' }}>
                        <ScrollAnimation_T2>
                            <div>我們著迷於食材的「質變」。以解構視角拿捏每一度溫差與熟成，重現極致風味與絕對精度。</div>
                            <div style={{ marginLeft: 10 }}>數據與火候的透明度是我們的底線。繁複的科學邏輯封裝在底層，把驚心動魄的計算留給廚房。</div>
                            <div style={{ marginLeft: 10 }}>當料理呈現在你面前，繁瑣皆化為優雅的直覺。誠邀您入座，領略時間與匠人意志淬鍊的饗宴。</div>
                        </ScrollAnimation_T2>
                    </div>
                </div>

                <div className='row my-5 align-items-center'>
                    <div className='col-12 col-md-6'>
                        <div className='d-flex align-items-start flex-column w-100 h-100 justify-content-center align-items-center gap-4'>
                            <ScrollAnimation_L>
                                <h2 style={{ fontSize: 'var(--home-card-subtitle)' }}>【 風味 】— 起源與核心哲學</h2>
                            </ScrollAnimation_L>
                            <div className='w-75' style={{ fontSize: 'var(--home-card-p)' }}>
                                <ScrollAnimation_L>
                                    烹飪是在數位與物理邊界進行的精密加工。我們著迷於食材的「質變」，用解構視角精確拿捏每一度溫差與風乾熟成，只為在盛盤瞬間，重現自然界最完美的極致風味結構
                                </ScrollAnimation_L>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <ScrollAnimation_pic_R>
                            {card1}
                        </ScrollAnimation_pic_R>
                    </div>
                </div>


                <div className="row mb-3 align-items-center">
                    <div className="col-12 col-md-6">
                        <div className='d-flex w-100 h-100 justify-content-center align-items-center'>
                            <div className='px-3 py-2 mx-auto' style={{maxWidth: '90%'}}><ScrollAnimation_pic_L>{card2}</ScrollAnimation_pic_L></div >
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className='d-flex flex-column w-100 h-100'>
                            <div className='d-flex align-items-start flex-column w-100 h-100 justify-content-center align-items-center gap-4'>
                                <ScrollAnimation_R>
                                    <h2 style={{ fontSize: 'var(--home-card-subtitle)' }}>【 把控】— 對烹飪流程堅持</h2>
                                </ScrollAnimation_R>
                                <div className='w-75' style={{ fontSize: 'var(--home-card-p)' }}>
                                    <ScrollAnimation_R>
                                        烹飪的完整性與火候的透明度是我們的底線。無論是黑羽土雞的時間軌跡，或A5和牛戰斧的中心溫度，皆以嚴格標準微調，不容許一絲雜質，用近乎偏執的精確呈現原始美味。
                                    </ScrollAnimation_R>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row mb-3 align-items-center">
                    <div className="col-12 col-md-6">
                        <div className='d-flex align-items-start flex-column w-100 h-100 justify-content-center align-items-center gap-4'>
                            <ScrollAnimation_L>
                                <h2 style={{ fontSize: 'var(--home-card-subtitle)' }}>【 簡馭】— 直覺美學</h2>
                            </ScrollAnimation_L>
                            <div className='w-75' style={{ fontSize: 'var(--home-card-p)' }}>
                                <ScrollAnimation_L>
                                    我們拒絕重複的味覺體驗，將繁複的工序與科學邏輯封裝在廚房底層。當料理呈現在你面前，驚心動魄的計算皆化為最優雅的直覺，把最純粹且震撼的感官饗宴留給坐在桌前的你。
                                </ScrollAnimation_L>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <ScrollAnimation_pic_R>
                            {card3}
                        </ScrollAnimation_pic_R>
                    </div>
                </div>


                <div className="row mb-3 align-items-center">
                    <div className="col-12 col-md-6">
                        <div className='px-md-5 mt-3'><ScrollAnimation_pic_L>{card4}</ScrollAnimation_pic_L></div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className='d-flex align-items-start flex-column w-100 h-100 justify-content-center align-items-center gap-4'>
                            <ScrollAnimation_R>
                                <h2 style={{ fontSize: 'var(--home-card-subtitle)' }}>【 空間 】— 空間對位與極致舒適</h2>
                            </ScrollAnimation_R>
                            <div className='w-75' style={{ fontSize: 'var(--home-card-p)' }}>
                                <ScrollAnimation_R>
                                    我們將理性留給廚房，將極致的舒適留給空間。在低調內斂的沉浸式氛圍中，空間溫柔對位，營造如家般自在、卻充滿細節的優雅座席，讓您能毫無負擔地沉浸於這場味覺饗宴。
                                </ScrollAnimation_R>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</div>
    );
};

export default AboutPage;