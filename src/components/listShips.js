import React from 'react';
import './listShips.css';

// To Do: Clicking a button sorts or shows only ships with a certain value on a column

function ListShips (props) {
    // console.log(props.state.ships)

    function shipTableRows (ships){
        return ships.map(
            (element)=>{
                return (
                    <tr>
                        <td>{element.name}</td>
                        <td>{element.dateStatus}</td>
                        <td>{element.status}</td>
                        {/* <td>{element.operator}</td>
                        <td>{element.owner}</td> */}
                    </tr>
                )
            }
        )
    }


    return (
        <div id="listShips">
            <table>
                <tr >
                    <th>Name</th>
                    <th>Status Date</th>
                    <th>Status</th>
                    {/* <th>Operator</th>
                    <th>Owner</th> */}
                </tr>
                { shipTableRows(props.state.ships) }
            </table>
        </div>
    );
};

export default ListShips;

