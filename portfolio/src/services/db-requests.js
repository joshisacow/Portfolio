const fetchDB = async (table) => {
    const resp = await fetch(process.env.NEXT_PUBLIC_DB_URL + 'rest/v1/' + table, {
        headers: {
            'apikey': process.env.NEXT_PUBLIC_DB_KEY
        }
    });
    const data = await resp.json();
    console.log(data);
    return data;
}

export default fetchDB;