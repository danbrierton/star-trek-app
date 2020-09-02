import React, {Component} from 'react';
import Navbar from '../components/navbar.js';
import ListShips from '../components/listShips.js'


class Home extends Component {
    
    state = {
        ship: ["blank"],
        url: "http://stapi.co/api/v1/rest/spacecraft/search"
    };
    
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
