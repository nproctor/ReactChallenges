import {FormEvent, useState} from 'react';

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
        <div className="challenge">
            <span className="title"> React Challenge #5 - Submit Form Data</span>
            <div className='challenge-content'>
                <form onSubmit={onSubmit}>
                    <p>Enter E-mail:</p>
                    <input name="E-mail" placeholder="E-mail" required={true}/>
                    <p>Enter Name:</p>
                    <input name="Name" placeholder="Name" required={true}/>   
                    <p>Enter Age:</p>
                    <input name="Age" placeholder="Age" type="number" required={true}/>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
                <ul>
                    {data.length > 0 && "Submitted!"}
                    {data.map( (val, i) => <li key={i}>{val}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default SubmitFormData;