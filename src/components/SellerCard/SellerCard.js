import './SellerCard.css';
import '../utils.css';
import heart from '../../static/heart.svg';
import star from '../../static/star.svg';

function SellerCard() {
    return (
        <div className='seller-card pointer'>
            <div className='image'>
                <a href='/'> <img src={heart} alt="heart" /></a>
            </div>
            <span className='rating'><img src={star} alt="rating" /> 4.98 <span className='light'>(3309) . Italy</span></span>
            <p className='title'>Pasta with the Grandmas</p>
            <p className='price'><b>From &#8377;2685</b>/Person</p>
        </div>
    );
}

export default SellerCard;