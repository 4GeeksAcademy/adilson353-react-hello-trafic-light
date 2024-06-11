import React, { useEffect, useState } from "react"



const TrafficColor = () => {

    const [selected, setselected] = useState("red")
    const [showPurple, setShowPurple] = useState(false);
    const [active,setActive] = useState (false);
    const ChangeColor = (color) => { setselected(color) }
    const handleShowPurple = () => {
        setShowPurple(!showPurple);
    };
    useEffect (() => {
        if (active) {
            const interval = setInterval(() => {
                if (selected == "red"){
                    setselected ("yellow")
                } else if ( selected == "yellow"){
                    setselected("green")
                } else if (selected == "green"){
                    setselected("red")
                }
            
                
            }, 3000)
            return () => clearInterval (interval)
        }
    }, [active,selected])

    return (
        <div className="container">
            <div className="base-semaforo"></div>
            <div className="traffic-light">
                <div className={`red ${selected == "red" ? "glow" : ""}`}
                    onClick={() => ChangeColor("red")}></div>
                <div className={`yellow ${selected == "yellow" ? "glow" : ""} `}
                    onClick={() => ChangeColor("yellow")}></div>
                <div className={`green ${selected == "green" ? "glow" : ""} `}
                    onClick={() => ChangeColor("green")}></div>
                
                {showPurple && <div className={`purple ${showPurple ? "" : ""}`}></div>}
                
                <button onClick={() => setActive (!active)} className="btn btn-success">Activar</button>
                
                <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={handleShowPurple} // 
                >
                    Add Color
                </button>
            </div>
        </div>





            );

}
            export default TrafficColor;