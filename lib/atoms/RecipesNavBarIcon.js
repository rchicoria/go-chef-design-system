import React, { Component } from 'react';

import colors from '../colors.js';
import Icon from './Icon';

export const RecipesNavBarIcon = (props) => (
  <Icon name="FavsSelected" width="30" height="30" />
)

export const RecipesNavBarIconActive = (props) => (
    <Icon name="Favs" width="30" height="30" />
  )
