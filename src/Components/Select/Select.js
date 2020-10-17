import React, { Component } from 'react';
import TextField from "material-ui/TextField";
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
// import { GridList, GridListTile, GridListTileBar, ListSubheader } from 'material-ui/GridList';
// import IconButton from 'material-ui/IconButton';
// import InfoIcon from '@material-ui/icons/Info';
// import PropTypes from 'prop-types';
// import { GridList, GridListTile } from 'material-ui/GridList';
// import { GridListTile } from 'material-ui/GridList/GridList';
// import ListSubheader from '@material-ui/core/ListSubheader';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
// import IconButton from '@material-ui/core/IconButton';

import './Select.css';
import ImageResults from '../Main/ImageResults';

class DropDown extends Component {

    state = {
        searchText: '',
        amount: 0,
        images: [],
        apiURL: 'https://pixabay.com/api',
        apiKey: '15266687-2307aafc0d1f160503474c932',
        clicked: false
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.amount !== this.state.amount) {
    //         axios.get(`${this.state.apiURL}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
    //         .then(response => this.setState({ images: response.data.hits })
    //         ).catch(error => console.log(error))
    //     }
    // }

    selectHandler = (e, index, value) => {
        this.setState({ amount: value })
    };

    textHanlder = e => {
        const val = e.target.value
        this.setState({ searchText: val })
    }

    showResults = e => {
        axios.get(`${this.state.apiURL}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
        .then(response => this.setState({ images: response.data.hits })
        ).catch(error => console.log(error))
        this.setState({ clicked: true })
    }

    render() {
        console.log(this.state.images);

        let display = <ImageResults images={this.state.images} />

        return (
            <div className="DropDown">
                <TextField
                    name="TextField"
                    value={this.state.searchText}
                    onChange={this.textHanlder}
                />
                <SelectField name="amount" onChange={this.selectHandler} value={this.state.amount}>
                    <MenuItem value={5} primaryText="5" />
                    <MenuItem value={10} primaryText="10" />
                    <MenuItem value={15} primaryText="15" />
                    <MenuItem value={20} primaryText="20" />
                </SelectField>
                <button onClick={this.showResults}>Search</button>
                <hr />
                {/* <ImageResults images={this.state.images} /> */}
                {this.state.clicked ? display : null}
                {/* {this.state.images.length < 0 ? <ImageResults image={this.state.images} /> : null} */}
                {/* {this.state.searchText !== '' ? <ImageResults images={this.state.images} /> : null} */}
            </div>
        )
    }
}


export default DropDown;
