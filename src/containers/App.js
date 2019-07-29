import React, {Component} from 'react';
import CardList from '../components/cardList';
import {robots} from '../components/robots';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';


class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchfield : ''
        }
    }
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
        
    }
    render(){
        const filteredrobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        // console.log(filteredrobots);
        return(
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll >
                <CardList robots={filteredrobots}/>
                </Scroll>
            </div>
        );
    }
   
}

export default App;