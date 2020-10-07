import React, {Component} from 'react';
import Navbar from '../components/navbar.js';
import ListShips from '../components/listShips.js'
import './Home.css';


class Home extends Component {
    
    state = {
        ships: [{}],
        url: "http://stapi.co/api/v1/rest/spacecraft/search",
        apiResponse: [],
        showTable: "null"
    };

    // TO DO LIST:  Build out captains table from API call data

    changeStateOfTable = (string) => {
        this.setState({showTable: string})
    }

    whatToPrint = () => {
        if (this.state.showTable == "ships") {return <ListShips state={this.state} />}
        else if (this.state.showTable == "captains") {return <p>captains table TBD</p>}
    }

    componentDidMount(){
        fetch(this.state.url)

        //Option 1 - Unfinished - Save the API Response, then extract ships later
        // .then(
        //     (response)=>{
        //         this.setState({apiResponse: response});
        //     }
        // )

        //Option 2 - Extract ships right from the API response and save it to state
        .then((result)=>(result.json()))
        .then((apiJson)=>this.setState({ships: apiJson.spacecrafts}))
        // .then(()=>{console.log(this.state.ships)})

        // .then(()=>{console.log(this.state.apiResponse)})
        // .then(()=>console.log(this.state.ships))
    }
    

    render(){
        return(
            <React.Fragment>
                <Navbar tableFunction={this.changeStateOfTable}/> 
                {this.whatToPrint()}
            </React.Fragment>
        )
    }
}

export default Home;
