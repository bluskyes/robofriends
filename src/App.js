import React from "react";
import CardList from "./CardList";
import SearchBox from './SearchBox'
import { robots } from "./robots";
import Scroll from "./Scroll"

// const state = {
//     robots : robots,
//     searchfield:''
// }

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            robots : [],
            Searchfield:''
        
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots:users}))
    }

    onSearchChange = (event) => {
        this.setState({Searchfield : event.target.value});
     } 
    render(){

        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.Searchfield.toLowerCase());
        })
        if(this.state.robots.length===0){
            return <h1>loading...</h1>
        }else{
            return (
                <div className="tc">
                        <h1>Robo friends</h1>
                        <SearchBox searchChange={this.onSearchChange} />
                        <Scroll>
                                <CardList robots={filteredRobots} />
                        </Scroll>
                        
                   </div>
            
               );

        }

    }
}

export default App;