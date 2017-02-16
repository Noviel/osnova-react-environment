// Created by snov on 01.02.2017.
import React, { Component } from 'react';
import styles from './style.css';

export default class Caption extends Component {

  static propTypes = {
    text: React.PropTypes.string
  };

  static defaultProps = {
    text: 'Caption'
  };

  render() {
    return (
      <div className={styles.caption}>{this.props.text}
      </div>
    )
  }
}