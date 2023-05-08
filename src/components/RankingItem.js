import React from 'react';
import { rankData } from '../api/rankData';
import { reviewData } from '../api/reviewData';
import './Ranking.css';


export default function RankingItem(props) {

    function review(id) {
        // API call

        return (
            <tr>
                {reviewData.map(review => 
                    <div className='reviewContainer'>
                        <p className='reviewTitle'></p>
                        <div className='reviewTextContainer'>
                            <p className='reviewText'></p>
                        </div>
                    </div>   
                )}
            </tr>
        );
    }

    // To filter amongst mock data
    const spex = rankData.forEach(data => {
        if (data.id === props.id) {
            return data;
        }
    })

    return (
        <React.Fragment>
            <tr className="tablerow">
                <td>{spex.rank}</td>
                <td>
                    <div className="title">
                        <img alt="test" 
                        src="https://thumbs.dreamstime.com/b/no-image-vector-symbol-missing-available-icon-no-gallery-moment-no-image-vector-symbol-missing-available-icon-no-gallery-169136238.jpg"></img>
                        <div className="details">
                            <p className="titleText">{spex.name}</p>
                            <p>{spex.organization}</p>
                            <p>{spex.date}</p>
                            <p>Antal röster</p>
                        </div>
                    </div>
                </td>
                <td>{spex.rating}</td>
                <td>{spex.yourRating}</td>
            </tr>
            <tr className='collapse'>
                {review}
            </tr>
        </React.Fragment>
    );
}