import './Bottle.css'

const Bottle = ({ bottle, handlePurchaseButton }) => {

    const { name, price, img, stock } = bottle

    return (
        <div className='bottle'>
            <h4>Name: {name} </h4>
            <img src={img} alt="" />
            <h5>Price: {price} </h5>
            <h5>Stock: {stock} </h5>

            <button onClick={() => { handlePurchaseButton(bottle) }}>Purchase</button>
        </div>
    );
};

export default Bottle;