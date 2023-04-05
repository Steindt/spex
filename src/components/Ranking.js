import {rankData} from '../api/rankData.js'
import './Ranking.css'

export default function Ranking() {
    const tableData = rankData.map(spex => 
        <tr>
            <td>{spex.rank}</td>
            <td>{spex.name}</td>
            <td>{spex.förening}</td>
            <td>{spex.betyg}</td>
            <td>{spex.dittBetyg}</td>
        </tr>
    );

    return (
        <table>
            <thead>
                <tr>
                    <th scope="col">Rank</th>
                    <th scope="col">Namn</th>
                    <th scope="col">Förening</th>
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