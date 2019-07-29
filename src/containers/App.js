import React, {Component} from 'react';
import CardList from '../components/cardList';
import {robots} from '../components/robots';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import { setSearchField } from '../actions'
import {connect} from 'react-redux'

const mapStateToProps = state => {
    return({
        searchField: state.searchField
    });
}

const mapDispatchToProps =  (dispatch) => {
    return({
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    });
}

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: robots,
            // searchfield : ''
        }
    }

    render(){
        const {searchField, onSearchChange} = this.props;
        const filteredrobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return(
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll >
                <CardList robots={filteredrobots}/>
                </Scroll>
            </div>
        );
    }
   
}

export default connect(mapStateToProps, mapDispatchToProps)(App);