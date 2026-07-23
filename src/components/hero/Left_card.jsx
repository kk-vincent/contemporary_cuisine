import React from 'react';


const Left_Card = ({
    num,
    name,
    title,
    subtitle,
    introduce = [],
    tab = [],
}) => {

    return (
        <div>
            <div className='d-flex align-items-end pb-0 gap-2'>
                <h2 style={{ fontSize: 'var(--home-card-num)', color: 'var(--home-num-color)', }}>{num}</h2>

                <p style={{ fontSize: 'var(--home-name)', color: 'var(--bg-card-color)', }}>{name}</p>
            </div>

            <div className='mb-3'>
                <h2 style={{ fontSize: 'var(--home-card-title)', }}>{title}</h2>
                <h3 style={{ color: 'var(--card-font-color)', fontSize: 'var(--home-card-subtitle)' }}>{subtitle}</h3>
            </div>

            <div className='grid text-center'>
                <div className='d-flex w-100 justify-content-end mb-3'>
                    <span style={{ fontSize: 'var(--home-span)', color: 'var(--home-name-color)' }}>[ PRECISION_COOKING_HUD ]</span>
                </div>
            </div>

            <div className='mb-5' style={{ lineHeight: 0.5, fontSize: 'var(--home-card-p)' }}>
                {introduce.map((ti, idx) => (
                    <p key={idx}>{ti}</p>
                ))}
            </div>

            <div className='d-flex align-items-end gap-2 mb-3'>
                <i className="bi bi-thermometer-high fs-2" style={{ color: 'var( --card-font-color)' }}></i>
                <h2 style={{ color: 'var(--block-sub)' }}>Flavor Profile / 風味結構</h2>
            </div>

            <div className='row row-cols-3 gap-2 my-5'>
                {tab.map((tab, idx) => (
                    <div
                        className='col d-flex justify-content-center align-items-center text-center rounded-pill'
                        style={{ background: 'var(--home-tages-bg)', color: 'var(--home-tags-bo-col)', border: 'var(--home-tags-bo) solid var(--home-tags-bo-col)' }} key={idx}>
                        {tab}
                    </div >
                ))}
            </div>


        </div>
    )
}

export default Left_Card