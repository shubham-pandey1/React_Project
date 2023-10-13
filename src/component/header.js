import React from "react";

function Header({name,lang}){
    return(
        <div style={{background:"yellow", padding:10, width: "800px"}}>
            <h1>This is my react app</h1>
            <h1>Learncode with {name}</h1>
            <h2>In language {lang}</h2>
            <h1>This is Header component for learning purpose</h1>
        </div>
    )
}
export default Header;