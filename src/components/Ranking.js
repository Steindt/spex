import {rankData} from '../api/rankData.js'
import './Ranking.css'

export default function Ranking() {
    const tableData = rankData.map(spex => 
        <tr className="tablerow" key={spex.id}>
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
    );

    return (
        <table>
            <thead>
                <tr>
                    <th scope="col">Rank</th>
                    <th scope="col">Namn</th>
                    <th scope="col">Betyg</th>
                    <th scope="col">Ditt betyg</th>
                </tr>
            </thead>
            <tbody>
                {tableData}
            </tbody>
        </table>
    );
}