let url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=5";

(async () => {
    try {
        let response = await fetch(url);

        if (response.ok) {
            let json = await response.json();
            console.log(json);

            for (let i = 0; i < json.length; i++) {
                console.log(`Rank: ${json[i].market_cap_rank}, name: ${json[i].name}, price: ${json[i].current_price} $`)
            }
        } else {
            console.log(response.status);
        }
    } catch (error) {
        console.log(error);
    }
})();
