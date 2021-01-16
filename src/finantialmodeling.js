
async function fetchCrypto() {
    const response = await fetch("https://finnhub.io/api/v1/crypto/symbol?exchange=oanda&token=sandbox_c01h39v48v6r07iq7j70");
    const data = await response.json();
    return data;
}

async function fetchForex() {
    const response = await fetch("https://finnhub.io/api/v1/crypto/symbol?exchange=binance&token=sandbox_c01h39v48v6r07iq7j70");
    const data = await response.json();
    return data;
}

async function fetchForexCandles(symbol) { 
    const date = new Date();
    date.setMinutes(new Date().getMinutes() - (60 * 48));
    const from = parseInt(+ date / 1e3);
    const to = parseInt(+ new Date() / 1e3);

    const response = await fetch('https://finnhub.io/api/v1/forex/candle?symbol='+symbol+'&resolution=1&from='+from+'&to='+to+'&token=sandbox_c01h39v48v6r07iq7j70');
    const data = await response.json();

    if (data.hasOwnProperty("c")){
        return data.c[0];
    } else {
        return 0;
    }
}
async function fetchCryptoCandles(symbol) { 
    debugger;
    const date = new Date();
    date.setMinutes(new Date().getMinutes() - (60 * 48));
    const from = parseInt(+ date / 1e3);
    const to = parseInt(+ new Date() / 1e3);

    const response = await fetch('https://finnhub.io/api/v1/crypto/candle?symbol='+symbol+'&resolution=1&from='+from+'&to='+to+'&token=sandbox_c01h39v48v6r07iq7j70');
    const data = await response.json();
  
    if (data.hasOwnProperty("c")){
        
        return data.c[0];
    } else {
        return 0;
    }
    
}
  
export {fetchForexCandles,fetchCryptoCandles,fetchCrypto,fetchForex}