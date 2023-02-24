import { useQuery } from "react-query";

async function fetchData() {
    const result = await fetch(`https://dog.ceo/api/breeds/image/random`);
    const json = await result.json();
    return json;
}

export function useDoggos() {
    return useQuery(["doggos"], fetchData);
}
