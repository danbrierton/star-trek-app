import React from 'react';

function ListShips (props) {
    return (
        <p>{props.state.ships[0].name}</p>
    );
};

export default ListShips;

