import { Link } from 'react-router-dom';
import data from "./data"

const Stocks = (props) => {
    

return ( 
    <div classsName="stocks">
        {data.map((coin) => {
                const { name, symbol} = coin;
                return (
                    <Link to={`/price/${symbol}`}>
                        <h2>{name}</h2>
                
                    </Link>
                );
            })}
        </div>
    );
};

export default Stocks;