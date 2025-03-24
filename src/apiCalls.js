export const getCountries = async () => {
    try {
        const res = await fetch(`https://restcountries.com/v3.1/all`);
        if (!res.ok) throw new Error('Could not fetch Data');
        const data = await res.json();
        return data
    } 
        catch (error) {
            console.log(error);

    }
};



export const getCountry = async () => {
    try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${}?fullText=true`);
        if (!res.ok) throw new Error('Could not fetch Data');
        const data = await res.json();
        return data
    }   catch (error) {
            console.log(error)
    }
};