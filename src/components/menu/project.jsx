import React from 'react';

const project=(menus)=>{
    return(
        <div>
            <ul style={{listStyle:'none',}}>
                {menus .map((menu,idx)=>(
                    <li key={idx}>
                        <a>{menu}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}