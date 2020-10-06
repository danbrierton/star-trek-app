import React, {Component} from 'react';
import Navbar from '../components/navbar.js';
import ListShips from '../components/listShips.js'
import './Home.css';


class Home extends Component {
    
    state = {
        ships: [{}],
        url: "http://stapi.co/api/v1/rest/spacecraft/search",
        apiResponse: [],
        showTable: null
    };

// NEED TO FIX:  changeStateOfTable broke after we sent it to Navbar component

    changeStateOfTable(string){
        // console.log(`old state: ${this.state.showTable}`)
        this.setState({showTable: string})
        // console.log(`new state: ${this.state.showTable}`)
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
                <p>Home Test</p>
                <ListShips state={this.state} />
            </React.Fragment>
        )
    }
}

export default Home;
