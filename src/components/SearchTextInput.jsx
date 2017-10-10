import React from 'react';
import '../styles/search-text-input.css';

class SearchTextInput extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(ev){
        const term = ev.target.value;
        this.props.onChange(term);
        this.setState({ value: term });
    }

    render(){
        return (
            <input type='search' className='search-text-input' value={this.state.value} onChange={this.handleChange} placeholder='Search' />
        );
    }
}

export default SearchTextInput;
