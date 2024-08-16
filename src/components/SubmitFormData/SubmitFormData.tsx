import {FormEvent, useState} from 'react';
import { BlockText, ChallengeContainer, ChallengeContentContainer, ChallengeTitle, StyledButton } from '../../App.style';

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
        <div>
            <form onSubmit={onSubmit}>
                <BlockText>Enter E-mail:</BlockText>
                <input name="E-mail" placeholder="E-mail" required={true}/>
                <BlockText>Enter Name:</BlockText>
                <input name="Name" placeholder="Name" required={true}/>   
                <BlockText>Enter Age:</BlockText>
                <input name="Age" placeholder="Age" type="number" required={true}/>
                <br/><br/>
                <StyledButton type="submit">Submit</StyledButton>
            </form>
            <ul>
                {data.length > 0 && "Submitted!"}
                {data.map( (val, i) => <li key={i}>{val}</li>)}
            </ul>
        </div>
    )
}

export default SubmitFormData;