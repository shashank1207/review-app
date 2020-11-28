import React, {useState} from 'react';
import male from './male.png';
import female from './female.png'
import StarRatings from 'react-star-ratings';
import likeblue from './likeblue.png';
import likegrey from './likegrey.png';

const Reviews = ({reviews}) => {
    const[show, setShow] = useState();
    const[count,setCount] = useState({
        start: 0, end: 3
    });
    const reviewList = reviews.reviews.slice(count.start,count.end).map(review => {
        return (
            <div className='review-item' key={review.user_id}>
                <div className='left'>
                    <div className='upper'>
                        <div className = 'circle'>
                            {review.reviewer.sex==='male'?
                                    <img src={male} alt='male'/>:
                                    <img src={female} alt='female'/>
                            }
                        </div>
                        <div className='name'>
                            {review.friend?
                                <h6>
                                    {review.reviewer.name}
                                </h6>:
                                <h6>
                                    Anonymous
                                </h6>
                            }
                        </div>
                    </div>
                    <div className='title'>
                        <p>
                            {review.title}
                        </p>
                    </div>
                    <div className='comment'>
                        <p>
                            {review.comment}
                        </p>
                    </div>
                    <div className='usefulness'>
                        <p><b>Usefullness: </b> {review.usefulness}</p>
                    </div>
                    <div className='like'>
                        {review.like? 
                        <img className='like-image' src={likeblue} alt='Liked'/>:
                        <img className='like-image' src={likegrey} alt='Not liked'/>
                        }
                    </div>
                </div>
                <div className='right'>
                    <div className='ratings'>
                        <div className='overall' style={show === review.user_id? {display: "none"}:null}>
                            <h4>Overall Rating</h4>
                            <div className='overall-stars'>
                                <StarRatings
                                    rating={review.ratings.Overall}
                                    starRatedColor="yellowgreen"
                                    numberOfStars={5}
                                    name='rating'
                                    starDimension='30px'
                                />
                            </div>
                            <button onClick={()=>{setShow(review.user_id)}}>Show more</button>
                        </div>
                        <div className='other' style={show === review.user_id? {display: "flex"}:{display:"none"}}>
                            <h4>Other ratings</h4>
                            <div className='other-star'>
                                <h6>Delivery</h6>
                                <StarRatings
                                    rating={review.ratings.delivery_time}
                                    starRatedColor="yellowgreen"
                                    numberOfStars={5}
                                    name='rating'
                                    starDimension='15px'
                                />
                            </div>
                            <div className='other-star'>
                                <h6>Discounts</h6>
                                <StarRatings
                                    rating={review.ratings.discounts_and_offers}
                                    starRatedColor="yellowgreen"
                                    numberOfStars={5}
                                    name='rating'
                                    starDimension='15px'
                                />
                            </div>
                            <div className='other-star'>
                                <h6>Matches description</h6>
                                <StarRatings
                                    rating={review.ratings.matches_description}
                                    starRatedColor="yellowgreen"
                                    numberOfStars={5}
                                    name='rating'
                                    starDimension='15px'
                                />
                            </div>
                            <div className='other-star'>
                                <h6>Matches photo</h6>
                                <StarRatings
                                    rating={review.ratings.matches_photo}
                                    starRatedColor="yellowgreen"
                                    numberOfStars={5}
                                    name='rating'
                                    starDimension='15px'
                                />
                            </div>
                            <div className='other-star'>
                                <h6>Packeging</h6>
                                <StarRatings
                                    rating={review.ratings.packaging}
                                    starRatedColor="yellowgreen"
                                    numberOfStars={5}
                                    name='rating'
                                    starDimension='15px'
                                />
                            </div>
                            <div className='other-star'>
                                <h6>Price</h6>
                                <StarRatings
                                    rating={review.ratings.price}
                                    starRatedColor="yellowgreen"
                                    numberOfStars={5}
                                    name='rating'
                                    starDimension='15px'
                                />
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        )
    });
    // var result = reviewList.length;

    return(
        <div>
            <div className='product-heading'>
                <h3>Product: {reviews.product_id} </h3>
            </div>
            <div>
                {reviewList}
            </div>
            <div className='button2' >
                <button className='button2' onClick={()=>{setCount(count.end+3)}}>Show more</button>
            </div>
        </div>
    )
}
export default Reviews;