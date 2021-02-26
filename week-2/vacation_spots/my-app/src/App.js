import React from "react";
import vacationSpots from "./vacationSpots";
import Vac from "./Vac";


function App(){
    const a = vacationSpots.map(vac => <Vac key={vac.id} place={vac.place} price={vac.price} time={vac.timeToGo} />)

    return (
        <div className = "stuff">
            {a}
        </div>
    )
}
    

export default App
