export const priceLoader = async ({params}) =>{
    const symbol = params.symbol;
    const apiKey = "F26E6475-66F8-4665-AE83-56FF67F889DD"
 return await fetch(
    `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`
).json();
};