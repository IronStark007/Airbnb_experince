import './ThisWeek.css';
import '../utils.css';
import next from '../../static/next.svg';
import prev from '../../static/prev.svg';
import WeekCard from '../WeekCard/WeekCard';
import { useRef } from 'react';

function ThisWeek() {
  let week = [
    { id: 1, name: "Most popular around the world", image: "https://a0.muscache.com/im/pictures/e35bb307-05f4-48a4-bdc5-3b2198bb9451.jpg?im_w=720" },
    { id: 2, name: "Great for team building", image: "https://a0.muscache.com/im/pictures/58819d01-2a71-441d-b3bc-baae0cd64da1.jpg?im_w=720" },
    { id: 3, name: "Fun for the family", image: "https://a0.muscache.com/im/pictures/bcbd20bb-1654-4ea2-a86c-2cf25666f3b6.jpg?im_w=720" }
  ]
  const slider = useRef();
  const slideLeft = () => {
    slider.current.scrollLeft = slider.current.scrollLeft - 500;
  };

  const slideRight = () => {
    slider.current.scrollLeft = slider.current.scrollLeft + 500;
  };
  return (
    <div className="thisweek">
      <div className='title-scroll flex-between'>
        <h1>New this week</h1>
        <div className='scroll'>
          <img className='pointer prev' onClick={slideLeft} src={prev} alt="prev" />
          <img className='pointer next' onClick={slideRight} src={next} alt="next" />
        </div>
      </div>
      <div className='horizontal-slider' ref={slider}>
        {week.map((ele) => {
          return (
            <WeekCard name={ele.name} image={ele.image} key={ele.id} />
          )
        })}
      </div>
    </div>
  );
}

export default ThisWeek;
