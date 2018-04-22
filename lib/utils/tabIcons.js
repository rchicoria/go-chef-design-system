import React, { Component } from 'react';

import colors from '../colors.js';
import Icon from '../atoms/Icon';

export const getTabIcon = (name, focused) => {
    if(focused){
        name += "Selected"
    }
    return <Icon name={name} width="30" height="30" fill={colors.grey}/>
}