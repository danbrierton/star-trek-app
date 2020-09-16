import React, {Component} from 'react';
import Navbar from '../components/navbar.js';
import ListShips from '../components/listShips.js'


class Home extends Component {
    
    state = {
        ship: ["blank"],
        url: "http://stapi.co/api/v1/rest/spacecraft/search"
    };

    componentDidMount(){
        fetch('http://stapi.co/api/v1/rest/spacecraft/search')
        .then(response => response.json())
        .then(data => console.log(data.spacecrafts))

        //Got state to set but for some reason it doesn't like 'data', troubleshoot more
        // .then(data => 
        //     {this.setState(
        //         {APIresponse: data.spacecrafts}
        //         )
        //     }
        // ).then(console.log(this.state.APIresponse))
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
