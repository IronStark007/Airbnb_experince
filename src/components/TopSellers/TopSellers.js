import './TopSellers.css';
import '../utils.css';
import next from '../../static/next.svg';
import prev from '../../static/prev.svg';
import { useRef } from 'react';
import SellerCard from '../SellerCard/SellerCard';

function TopSellers() {

  const slider = useRef();
  const slideLeft = () => {
    slider.current.scrollLeft = slider.current.scrollLeft - 800;
  };

  const slideRight = () => {
    slider.current.scrollLeft = slider.current.scrollLeft + 800;
  };
  return (
    <div className="top-sellers">
      <div className='title-scroll flex-between'>
        <h1>Top sellers</h1>
        <div className='scroll'>
          <p className='show'>Show(115)</p>
          <img className='pointer prev' onClick={slideLeft} src={prev} alt="prev" />
          <img className='pointer next' onClick={slideRight} src={next} alt="next" />
        </div>
        <img className='pointer right' src={next} alt="next" />
      </div>
      <div className='container horizontal-slider' ref={slider}>
        {Array(10).fill(true).map((ele, idx) => {
          return (
            <SellerCard key={idx} />
          )
        })}
      </div>
    </div>
  );
}

export default TopSellers;
