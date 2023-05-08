import {rankData} from '../api/rankData.js';
import RankingItem from './RankingItem.js';

export default function Ranking() {

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
                {rankData.map(spex => 
                    <RankingItem key={spex.id} id={spex.id}></RankingItem>
                )}
            </tbody>
        </table>
    );
}