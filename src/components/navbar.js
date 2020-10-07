import React from 'react';


function Navbar(props) {
    function listOutShips() {
        props.tableFunction("ships")
    }
    function listOutCaptains() {
        props.tableFunction("captains")
    }
    return (
        <nav>
            <button onClick={()=>listOutShips()}>Ships</button>
            <button onClick={()=>listOutCaptains()}>Captains</button>
        </nav>
    );
}

export default Navbar;
