import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import store from '../redux/store';
import {addNameCreater, addAgeCreater} from '../redux/actions';

const { Search } = Input;

class AddName extends Component {
    static propTypes = {
        name: PropTypes.string,
        age: PropTypes.number
    }
    constructor(props) {
        super(props);
        this.onNameSearch = this.onNameSearch.bind(this);
        this.onAgeSearch = this.onAgeSearch.bind(this);
    }
    onNameSearch(value) {
        store.dispatch(addNameCreater(value))
    }
    onAgeSearch(value) {
        store.dispatch(addAgeCreater(value))
    }
    render() {
    let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
    );
    unsubscribe();
       return(
        <div style={{paddingLeft: 30}}>
            <br />
            <Search
                placeholder="请输入姓名"
                onSearch={value=>{this.onNameSearch(value)}}
                style={{width: 200}}
                enterButton
            />
            <br />
            <br />
            <Search
                placeholder="请输入年龄"
                onSearch={value=>{this.onAgeSearch(value)}}
                style={{width: 200}}
                enterButton
            />
        </div>
       )
   }
}

export default AddName;

