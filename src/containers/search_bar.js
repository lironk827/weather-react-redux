import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions';

class SearchBar extends Component {
    constructor(props){
        super(props);
        // internal state for the component use only !
        // its NOT the app state which defined and managed by redux store
        this.state = {term: ''};

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        this.setState({term: event.target.value});
    }

    onFormSubmit(event){
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
            <input
        onChange={this.onInputChange}
        className = "form-control"
        value = {this.state.term}
        placeholder = "Type in a city name to get 5-days forecast" />
            <span className="input-group-btn">
            <button className="btn btn-primary">Search</button>
            </span>
            </form>
    );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather},dispatch);
}

export default connect(null,mapDispatchToProps)(SearchBar);