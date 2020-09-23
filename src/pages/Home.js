import React, {Component} from 'react';
import Navbar from '../components/navbar.js';
import ListShips from '../components/listShips.js'


class Home extends Component {
    
    state = {
        ships: [{}],
        url: "http://stapi.co/api/v1/rest/spacecraft/search",
        apiResponse: []
    };

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
                <Navbar /> 
                <p>Home Test</p>
                <ListShips state={this.state} />
            </React.Fragment>
        )
    }
}

export default Home;
