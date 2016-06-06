import React, { Component } from 'react'


//Functional component
// const SearchBar = () => {
//     return <input /> // == React.createElement()
// }

//Class component
// class SearchBar extends React.Component {
//     //Every react component that's class based must have render
//     render() {
//         //Must return JSX
//         return <input />;
//     }
// }

//Functional components = simple functionality
//Class component = more complex functionality | have state

//Cleaned with ES6
class SearchBar extends Component {
    //Define the state
    constructor(props) {
        super(props);
        
        this.state = { term: '' };
    }
    
    
    //Every react component that's class based must have render
    render() {
        //Must return JSX
        //Single argument can drop off () in (event)
        return (
            <div className="search-bar">
            <input 
                value = { this.state.term }
                onChange={ event => this.onInputChange(event.target.value)} />
            </div>
        );
    }
    
    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;