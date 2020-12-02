import React from 'react';

function ListCaptains (props) {
    const printCaptainRows = (people)=> {
        return people.map(
            (element, index)=> {
                return (
                    <tr key={index}>
                        <td>{element.name}</td>
                        {/* Deceased stored as boolean not string so need to add logic to print correctly */}
                        <td>{element.deceased}</td>
                        <td>{element.yearOfDeath}</td>
                    </tr>
                )
            }     
        )
    }



    return (
        <div id="listCaptains">
            <div><h2>Captains</h2></div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Deceased?</th>
                        <th>Year of Death</th>
                    </tr>
                </thead>
                <tbody>
                    {printCaptainRows(props.captains)}
                </tbody>

            </table>

        </div>
        
    )



}




export default ListCaptains;