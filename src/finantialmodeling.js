
async function fetchForex() {
    const response = await fetch("https://finnhub.io/api/v1/crypto/symbol?exchange=oanda&token=c01h33v48v6r07iq7hrg");
    const data = await response.json();
    return data;
}

async function fetchCrypto() {
    const response = await fetch("https://finnhub.io/api/v1/crypto/symbol?exchange=binance&token=c01h33v48v6r07iq7hrg");
    const data = await response.json();
    return data;
}

async function fetchForexCandles(symbol) { 
    const date = new Date();
    date.setMinutes(new Date().getMinutes() - (60 * 72));
    const from = parseInt(+ date / 1e3);
    const to = parseInt(+ new Date() / 1e3);

    const response = await fetch('https://finnhub.io/api/v1/forex/candle?symbol='+symbol+'&resolution=D&from='+from+'&to='+to+'&token=c01h33v48v6r07iq7hrg');
    const data = await response.json();

    if (data.hasOwnProperty("c")){
        console.log(data.c[data.c.length-1],data.c[0])
        return [data.c[0], (data.c[data.c.length-1] / data.c[0]).toString().substring(0,5) ];
    } else {
        return 'No data';
    }
}
async function fetchCryptoCandles(symbol) { 

    const date = new Date();
    date.setMinutes(new Date().getMinutes() - (60 * 72));
    const from = parseInt(+ date / 1e3);
    const to = parseInt(+ new Date() / 1e3);

    const response = await fetch('https://finnhub.io/api/v1/crypto/candle?symbol='+symbol+'&resolution=D&from='+from+'&to='+to+'&token=c01h33v48v6r07iq7hrg');
    const data = await response.json();

    if (data.hasOwnProperty("c")){
        return [data.c[0], (data.c[data.c.length-1] / data.c[0]).toString().substring(0,5) ];
    } else {
        return 'No data';
    }
    
}

async function fetchMarketnews() {
    const response = await fetch('https://finnhub.io/api/v1/news?category=general&token=c01h33v48v6r07iq7hrg');
    const data = await response.json();

    if (data){
        return data;
    } else {
        return 'No data';
    }
}

async function fetchEconomicCalendar() {
    

    const response = await fetch('https://finnhub.io/api/v1/calendar/economic?token=c01h33v48v6r07iq7hrg');
    const data = await response.json();

    if (data){
        return data.economicCalendar.reduce((total,e,i) => { const key = e.event + e.time; return ((i === 1) ? {[key]: e} : {...total, [key]: e });  } );
    } else {
        return 'No data';
    }
}
export {fetchForexCandles,fetchCryptoCandles,fetchCrypto,fetchForex,fetchMarketnews,fetchEconomicCalendar}