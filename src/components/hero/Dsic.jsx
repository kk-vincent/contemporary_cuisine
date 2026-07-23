import React from 'react';
import '../../style/dsic.scss';

// 💡 1. 記得在 Props 裡面接收 activeIndex 與 onSelect！
const Dsic = ({ pic1, pic2, pic3, pic4, pic5, activeIndex = 0, onSelect }) => {
  const items = [pic1, pic2, pic3, pic4, pic5];

  // ❌ 這裡不要再宣告 const [activeIndex, setActiveIndex] = useState(0);
  // 狀態統一由 HomePage 管理，轉盤只負責「接收」與「觸發事件」

  return (
    <div className='wheel-mask-container'>
      <div className='wheel-position-adjust'>
        <div 
          className='rotating-wheel'
          style={{ transform: `rotate(${-activeIndex * 72}deg)` }}
        >
          {items.map((pic, index) => (
            <div 
              key={index} 
              className={`wheel-item item-${index} ${index === activeIndex ? 'active' : ''}`}
              // 💡 2. 安全調用父組件傳進來的 onSelect
              onClick={() => onSelect && onSelect(index)} 
            >
              <div 
                className='digit-stabilizer' 
                style={{ transform: `rotate(${activeIndex * 72}deg)` }}
              >
                <img src={pic} alt={`pic-${index}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dsic;