import './Purchase.css'

const Purchase = ({ purchase }) => {

    return (
        <div>
            <h3> Purchased Bottle: {purchase.length} </h3>
            <div className="cart-image-container">

                {
                    purchase.map(bottle => <img key={bottle.idx} src={bottle.img} alt="" />)
                }

            </div>
        </div>
    );
};

export default Purchase;