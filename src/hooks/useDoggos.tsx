import { useQuery } from "react-query";

async function fetchData() {
    const result = await fetch(`https://api.thedogapi.com/v1/images/search?&api_key=live_t2vmISTrUFv6nMUX4mRhakcyx7KnYVLha83IBs4Oobes3bMqfUS5bC4T1buI4BiP`);
    const json = await result.json();
    return json;
}

export function useDoggos() {
    return useQuery(["doggos"], fetchData);
}