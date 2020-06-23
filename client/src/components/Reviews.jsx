import React from 'react';
import Axios from 'axios';
// import ReviewEntry from './ReviewEntry.jsx';

export default class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productId: 'handcrafted-metal-bike',
      product: {}
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>Hello from React!</div>
    );
  }
}