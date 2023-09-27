/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

function useCurrecnyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => {
                // console.log(res)
                setData(res)
            });
    }, [currency])

    return data;

}

export default useCurrecnyInfo;