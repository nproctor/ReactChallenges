
import {useState} from 'react';


const ShowHideTitle = () => {
    const [hidden, setHidden] = useState(false);
    return (<div>
        <h3> React Challenge #1 - Show/Hide Title</h3>
        <h1 hidden={hidden}>Title</h1>
        <button onClick={() => setHidden(hidden => !hidden)}>Toggle Title</button>
    </div>)
}

export default ShowHideTitle;