import { useQuery } from "react-query";

async function fetchDataBreed() {
    const result = await fetch(`https://dog.ceo/api/breeds/list/all`);
    const json = await result.json();
    return json;
}

export function useDoggosBreeds() {
    return useQuery(["breeds"], fetchDataBreed);
}