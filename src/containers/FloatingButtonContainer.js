import React, {Component } from 'react'
import {connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import oc from 'open-color'

import FloatingButton from '../components/FloatingButton';
import * as baseActions from '../modules/base';
import * as modalActions from '../modules/modal';

function generateRandomColor() {
    const colors = [
        'gray',
        'red',
        'pink',
        'grape',
        'violet',
        'indigo',
        'blue',
        'cyan',
        'teal',
        'green',
        'lime',
        'yellow',
        'orange'
    ];

    // 0 부터 12까지 랜덤 숫자
    const random = Math.floor(Math.random() * 13);

    return oc[colors[random]][6];
}


class FloatingButtonContainer extends Component{
    handleClick =() =>{
        const {ModalActions, BaseActions} = this.props;
        BaseActions.setView('list')
        ModalActions.show({
            mode:'create',
            contact:{
                name:'',
                phone: '',
                color: generateRandomColor()
            }
        });
    }

    render(){
        const {handleClick} = this;
        return (
            <FloatingButton onClick = {handleClick} />
        )
    }
}


export default connect(
    null,
    (dispatch) => ({
        ModalActions: bindActionCreators(modalActions, dispatch),
        BaseActions: bindActionCreators(baseActions,dispatch)
    })
)(FloatingButtonContainer)