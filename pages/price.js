import { useLoaderData } from "react-router-dom";
import data from "./data"
const Price = props => {


    //get the data fetched by our loader.
    const coin = useLoaderData();
    return (
        <div>
            <h1>
                <h1>{data[0].name}</h1>
                <h1>{data[0].symbol}</h1>
                <h1>{data[0].lastPrice}</h1>
            </h1>
            <h2>{coin.rate}</h2>
        </div>
    );

}

export default Price;