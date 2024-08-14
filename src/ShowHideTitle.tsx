
import {useState} from 'react';


const ShowHideTitle = () => {
    const [hidden, setHidden] = useState(false);
    return (
        <div className='challenge'>
        <span className="title">React Challenge #1 - Show/Hide Title</span>
            <div className='challenge-content'>
                <h1 hidden={hidden}>Title</h1>
                <button onClick={() => setHidden(hidden => !hidden)}>Toggle Title</button>
            </div>
    </div>)
}

export default ShowHideTitle;