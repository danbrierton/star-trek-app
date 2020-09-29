import React from 'react';

function ListShips (props) {
    console.log(props.state.ships)

    function test (ships){
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
        <div>


            <table>
                <tr>
                    <th>Name</th>
                    <th>Status Date</th>
                    <th>Status</th>
                    <th>Operator</th>
                    <th>Owner</th>
                </tr>
                { test(props.state.ships) }
            </table>
        </div>


    );
};

export default ListShips;

