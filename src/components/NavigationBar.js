import './NavigationBar.css';

export default function NavigationBar() {
    function test() {
        alert("CLICK");
    }

    return (
        <button onClick={test}>Hello</button>
    );
}