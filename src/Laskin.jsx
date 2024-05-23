import React from "react";

export default function Laskin() {
    
    const [laskuri, setLaskuri] = React.useState(0);



    return (
        <div className="Counter">
            <button className="counter--minus"></button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus"></button>
        </div>
    );
}