const apiUrl = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=5";


async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Ошибочка! Статус код: ${response.status}`);
        }  // throw new Error(response.statusText);

        return await response.json();

    } catch (error) {
        console.log(error);
    }
}


function formattedData(data) {
    let formattedJson;
    formattedJson = data.map((item) => {
        return {
            rank: item.market_cap_rank,
            name: item.name,
            price: `${item.current_price} $`
        }
    });

    return formattedJson
}


async function master() {
    try {
        const responseData = await fetchData(apiUrl);
        console.table(formattedData(responseData));
    } catch (error) {
        console.error("Произошла ошибка при выполнении скрипта:", error.message);
    }
}

master();
