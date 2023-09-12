import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";

import './Bottles.css'
import { addToLocalStorage, getStoredCart } from "../../utilities/localStorage";
import Purchase from "../../Purchase/Purchase";



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
        // console.log(bottles.length);
        if (bottles.length > 0) {
            const storedCart = getStoredCart()
            // console.log(storedCart, bottles);

            const savedCart = []
            for (const id of storedCart) {
                console.log(id);

                const bottle = bottles.find(bottle => bottle.id === id)
                if (bottle) {
                    savedCart.push(bottle)
                }
            }
            console.log(savedCart);
            setPurchase(savedCart)

        }
    }, [bottles])


    return (
        <div>
            <h3>Bottles: {bottles.length} </h3>

            <div>

                <Purchase purchase={purchase}></Purchase>

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