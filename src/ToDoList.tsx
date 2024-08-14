import {useState, useRef, FormEvent, MouseEvent} from 'react';
const ToDoList = () => {
    const [cities, setCities] = useState<string[]>([]);
    const cityRef = useRef<HTMLInputElement>(null);

    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (cityRef.current && cityRef.current.value.length > 0){
            setCities([...cities, cityRef.current.value])
            cityRef.current.value = "";
        }
    }

    const remove = (index: number) => {
        setCities(cities => cities.filter((entry, i) => {return index !== i}));
    }

    return (
        <div>
            <h3> React Challenge #3 - ToDo List</h3>
            <form onSubmit={onSubmit} >
                <input ref={cityRef} type="text" name="city" placeholder='Enter City'/>
                <input type="submit" value="Submit"/>
            </form>
            <ul>
                {cities.map((entry, index) => {
                    return <li key={index}> {entry} <button onClick={() => remove(index)}> X </button> </li>
                })}
            </ul>
        </div>
    )
}

export default ToDoList;