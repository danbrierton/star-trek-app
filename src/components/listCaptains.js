import React from 'react';

function ListCaptains (props) {
    console.log(props.captains)
    //assign function to a variable
    const printCaptainRows = ()=> {
        return (
            //TO DO: Map or ForEach for the elements we want from the props.captains array
            <tr>
                <td>"Hello there"</td>
                <td>Super Dead</td>
                <td>A while ago</td>
            </tr>
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
                    {printCaptainRows()}
                </tbody>

            </table>

        </div>
        
    )



}




export default ListCaptains;