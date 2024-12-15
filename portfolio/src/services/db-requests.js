const fetchDB = async (table) => {
    const data = await fetch(process.env.NEXT_PUBLIC_DB_URL + 'rest/v1/' + table, {
        headers: {
            'apikey': process.env.NEXT_PUBLIC_DB_KEY
        }
    })
        .then(res => res.json())
        .catch(err => console.log(err));

    console.log(data);
    return data;
}

export default fetchDB;