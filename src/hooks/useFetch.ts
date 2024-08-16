import { useState, useEffect } from 'react';


const useFetch = () => {
    const [data, setData] = useState<string>("");

    const refreshData = async () => {
        return fetch("https://api.kanye.rest/")
        .then((res) => res.json())
        .then((json) => json.quote)
        .then((text) => setData(text))
        .catch(() => setData("Oops... couldn't find a Kanye quote. Honestly, it's for the better."))
    }

    return {data, refreshData}
}

export default useFetch;