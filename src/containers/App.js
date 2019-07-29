import React, {Component} from 'react';
import CardList from '../components/cardList';
// import {robots} from '../components/robots';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import { setSearchField, requestRobots } from '../actions'
import {connect} from 'react-redux'

const mapStateToProps = state => {
    return({
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending : state.requestRobots.isPending,
        error: state.requestRobots.error
    });
}

const mapDispatchToProps =  (dispatch) => {
    return({
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    });
}

class App extends Component {

    componentDidMount(){
        this.props.onRequestRobots();
    }

    render(){
        const {robots, isPending, searchField, onSearchChange} = this.props;
        const filteredrobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return isPending ? 
            <h1>loading</h1> : (
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