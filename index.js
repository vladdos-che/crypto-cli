const apiUrl = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=5";

(async () => {
    try {
        const response = await fetch(apiUrl);

        if (response.ok) {
            const json = await response.json();

            const formatedJson = json.map((item) => {
                return {
                    Rank: item.market_cap_rank,
                    name: item.name,
                    price: `${item.current_price} $`
                }
            });

            console.table(formatedJson);
        } else {
            console.log(`Ошибочка! Статус код: ${response.status}`);
        }
    } catch (error) {
        console.log(error);
    }
})();
