import './WeekCard.css';
import '../utils.css'
import { useEffect, useRef } from 'react';

function WeekCard({ name, image }) {
    const weekRef = useRef(document.body);

    useEffect(() => {
        weekRef.current.style.background = `url(${image}) no-repeat`
    }, [image])
    return (
        <div className="pointer weekcard" ref={weekRef}>
            <div className='content'>
                <p>Collection</p>
                <h2>{name}</h2>
            </div>
            <button className="pointer more" type="submit">Show all</button>
        </div>
    );
}

export default WeekCard;
