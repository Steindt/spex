import React from 'react';
import './Ranking.css';


export default function RankingItem(props) {
        return (
        <React.Fragment>
            <tr className="tablerow">
                <td>{props.spex.rank}</td>
                <td>
                    <div className="title">
                        <img alt="test" 
                        src="https://thumbs.dreamstime.com/b/no-image-vector-symbol-missing-available-icon-no-gallery-moment-no-image-vector-symbol-missing-available-icon-no-gallery-169136238.jpg"></img>
                        <div className="details">
                            <a href={"spex/" + props.spex.id} target="_" className="titleText">{props.spex.name}</a>
                            <p>{props.spex.organization}</p>
                            <p>{props.spex.date}</p>
                            <p>Antal röster</p>
                        </div>
                    </div>
                </td>
                <td>{props.spex.rating}</td>
                <td>{props.spex.yourRating}</td>
            </tr>
        </React.Fragment>
    );
}