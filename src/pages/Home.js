import React, {Component} from 'react';
import Navbar from '../components/navbar.js';
import ListShips from '../components/listShips.js'
import ListCaptains from '../components/listCaptains.js'
import './Home.css';


class Home extends Component {
    
    state = {
        ships: [{}],
        captains: "nullish",
        url: "http://stapi.co/api/v1/rest/spacecraft/search",
        apiResponse: [],
        showTable: null
    };

    // TO DO LIST:  Build out captains table from API call data

    //change state function
    changeStateOfTable = (string) => {
        this.setState({showTable: string})
    }

    whatToPrint = () => {
        //makes this.state accessible (as a prop) to the ListShips component
        if (this.state.showTable === "ships") {return <ListShips state={this.state} />}
        else if (this.state.showTable === "captains") {return <ListCaptains captains={this.state.captains}/>}
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

        //==fetch the character list for the captain table==
        fetch("http://stapi.co/api/v1/rest/character/search") 
        //NOTE: WHY DOES HAVING {} BREAK THIS LINE???
        .then((result)=>result.json())
        .then(
            (apiCharactersJSON)=>{this.setState({captains: apiCharactersJSON.characters})}
        )

        // .then((result)=>{console.log(result)})
    
    }
    

    render(){
        return(
            <React.Fragment>
                {/* makes changeStateOfTable accessible to Navbar, because we pass it as a key */}
                <Navbar tableFunction={this.changeStateOfTable}/> 
                {this.whatToPrint()}
            </React.Fragment>
        )
    }
}

export default Home;
