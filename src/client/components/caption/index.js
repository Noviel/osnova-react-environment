// Created by snov on 01.02.2017.
import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

export default class Caption extends Component {

  static propTypes = {
    text: React.PropTypes.string
  };

  static defaultProps = {
    text: 'Caption'
  };

  render() {
    return (<div className="main">{this.props.text}</div>)
  }
}