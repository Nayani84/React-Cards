import { useState } from "react";
import axios from "axios";
import { v1 as uuid } from "uuid";

const useFlip = (initialState = true) => {
    const [isFlipped, setIsFlipped] = useState(initialState);
    const toggleFlip = () => {
        setIsFlipped(isFlipped => !isFlipped);
    }
    return [isFlipped, toggleFlip];
}



function useAxios(baseUrl) {
    const [data, setData] = useState([]);

    const addData = async (endpoint = "") => {
        try {
            const res = await axios.get(`${baseUrl}${endpoint}`);
            setData(data => [...data, { ...res.data, id: uuid() }]);
        } catch (error) {
            console.error("Error Fetching Data", error);
        }
    };

    const clearData = () => {
        setData([]);
    };

    return [data, addData, clearData];
}

export { useFlip, useAxios };