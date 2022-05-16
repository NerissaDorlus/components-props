import React from "react";
import Greet  from "./Greet"

function Main(props){
    return(
        <main>
            <Greet firstName="Nerissa" lastName="Dorlus" age="31"/>
            <Greet firstName="Darie"/>
            <Greet firstName="Riessa"/>
            <Greet firstName="Anouk"/>
        </main>
    )
}





export default Main;