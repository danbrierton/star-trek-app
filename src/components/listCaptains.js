import React from 'react';



function ListCaptains (props) {
    console.log(props.captains);
    const printCaptainRows = (people)=> {
        return people.map(
            (element, index)=> {
                return (
                    <tr key={index}>
                        <td>{element.name}</td>
                        {formatDeceased(element.deceased)}
                        <td>{element.yearOfDeath}</td>
                        {deathInconsistencycheck(element.deceased, element.yearOfDeath)}
                    </tr>
                    
                )
            }     
        )
    }

    //a bit of logit to interpret the deceased table field
    const isDeceasedLogic = (thisRow)=> {
        if (thisRow === null) 
            {return "no";}
        else { return thisRow.toString()}
    };

    //NEXT TIME: Take the logic from this and use it to change the css of those rows.


    const formatDeceased = (rowData)=> {
        if (rowData === true)
            {return <td class="deceased">{isDeceasedLogic(rowData)}</td>;
        }
        else {return <td class="alive">{isDeceasedLogic(rowData)}</td>;}
    }

    // if deceased is null and Year of Death is a value that is not null, then
    const deathInconsistencycheck = (isDeadbool, deathYear)=> {
        if (isDeadbool == null && deathYear !== null) {
            console.log("hey, this is messed up!")
        }
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