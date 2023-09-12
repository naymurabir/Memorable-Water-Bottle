import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";

import './Bottles.css'
import { addToLocalStorage, getStoredCart } from "../../utilities/localStorage";

const Bottles = () => {
    const [bottles, setBottles] = useState([])

    const [purchase, setPurchase] = useState([])

    const handlePurchaseButton = (bottle) => {
        const newPurchase = [...purchase, bottle]
        setPurchase(newPurchase)

        addToLocalStorage(bottle.id)
    }

    useEffect(() => {
        fetch('bottles.json')
            .then(response => response.json())
            .then(data => setBottles(data))
    }, [])

    useEffect(() => {
        const storedCart = getStoredCart()
        setPurchase(storedCart)
    }, [])




    return (
        <div>
            <h3>Bottles: {bottles.length} </h3>

            <div>
                <h3> Purchased Bottle: {purchase.length} </h3>
            </div>


            <div className="bottles-container">
                {
                    bottles.map(bottle => <Bottle
                        key={bottle.id}
                        bottle={bottle}
                        handlePurchaseButton={handlePurchaseButton}
                    >

                    </Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;