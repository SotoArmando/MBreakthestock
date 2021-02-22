async function checkTry(url,fetchOptions, r = 3) {
    function onError(response){ 
        return (response && !response.hasOwnProperty("error")) ? response 
        : wait(2000).then(() => checkTry(url,fetchOptions, r - 1)) 
    }

    return fetch(url,fetchOptions).then(onError);
}

function wait(delay){
    return new Promise((resolve) => setTimeout(resolve, delay));
}

async function fetchForex() {
    const response = await checkTry("https://finnhub.io/api/v1/crypto/symbol?exchange=oanda&token=c01h33v48v6r07iq7hrg", { cache: "force-cache" });

    const data = await response.json();
    return (data && !data.hasOwnProperty("error")) ? data : []
}

async function fetchCrypto() {
    const response = await checkTry("https://finnhub.io/api/v1/crypto/symbol?exchange=binance&token=c01h33v48v6r07iq7hrg", { cache: "force-cache" });
    const data = await response.json();
    return (data && !data.hasOwnProperty("error")) ? data : []
}

async function fetchForexCandles(symbol) {
    const date = new Date();
    date.setMinutes(new Date().getMinutes() - (60 * (24 * 10)));
    const from = parseInt(+ date / 1e3);
    const to = parseInt(+ new Date() / 1e3);

    const response = await checkTry('https://finnhub.io/api/v1/forex/candle?symbol=' + symbol + '&resolution=60&from=' + from + '&to=' + to + '&token=c01h33v48v6r07iq7hrg', { cache: "force-cache" });
    const data = await response.json();

    if (data.hasOwnProperty("c") && !data.hasOwnProperty("error")) {
        console.log(data.c[data.c.length - 1], data.c[0])
        return [data.c[0], (data.c[data.c.length - 1] / data.c[0]).toString().substring(0, 5)];
    } else {
        return [];
    }
}
async function fetchCryptoCandles(symbol) {

    const date = new Date();
    date.setMinutes(new Date().getMinutes() - (60 * (24 * 10)));
    const from = parseInt(+ date / 1e3);
    const to = parseInt(+ new Date() / 1e3);

    const response = await checkTry('https://finnhub.io/api/v1/crypto/candle?symbol=' + symbol + '&resolution=60&from=' + from + '&to=' + to + '&token=c01h33v48v6r07iq7hrg', { cache: "force-cache" });
    const data = await response.json();

    if (data.hasOwnProperty("c") && !data.hasOwnProperty("error")) {
        return [data.c[0], data.c[1]];
        
    } else {
        return [];
    }

}

async function fetchMarketnews() {
    const response = await checkTry('https://finnhub.io/api/v1/news?category=general&token=c01h33v48v6r07iq7hrg', { cache: "force-cache" });
    const data = await response.json();

    if (data && !data.hasOwnProperty("error")) {
        return data;
    } else {
        return [];
    }
}

async function fetchEconomicCalendar() {


    const response = await checkTry('https://finnhub.io/api/v1/calendar/economic?token=c01h33v48v6r07iq7hrg', { cache: "force-cache" });
    const data = await response.json();

    if (data && !data.hasOwnProperty("error")) {
        console.log("fetchEconomicCalendar ", data)
        return data.economicCalendar.reduce((total, e, i) => { const key = e.event + e.time; return ((i === 1) ? { [key]: e } : { ...total, [key]: e }); });
    } else {
        return [];
    }
}
export { fetchForexCandles, fetchCryptoCandles, fetchCrypto, fetchForex, fetchMarketnews, fetchEconomicCalendar }