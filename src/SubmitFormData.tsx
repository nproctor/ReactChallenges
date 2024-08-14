import {FormEvent, useState} from 'react';
import './SubmitFormData.style.css';

const SubmitFormData = () => {
    const [data, setData] = useState<string[]>([]);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const arr : string[] = [];
        data.forEach( (value, key) => {
            arr.push(`${key}: ${value}`);
        })
        e.currentTarget.reset();
        setData(arr);
    }

    return (
        <div className="submitFormData">
            <h3> React Challenge #5 - Submit Form Data</h3>
            <form onSubmit={onSubmit}>
                <span>Enter E-mail:</span>
                <input name="E-mail" placeholder="E-mail" required={true}/>
                <span>Enter Name:</span>
                <input name="Name" placeholder="Name" required={true}/>   
                <span>Enter Age:</span>
                <input name="Age" placeholder="Age" type="number" required={true}/>
                <button type="submit">Submit</button>
            </form>
            <ul>
                {data.length > 0 && "Submitted!"}
                {data.map( (val, i) => <li key={i}>{val}</li>)}
            </ul>
        </div>
    )
}

export default SubmitFormData;