import React from 'react';
import Axios from 'axios';
// import ReviewEntry from './ReviewEntry.jsx';

export default class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productId: 'handcrafted-metal-bike',
      reviews: [],
    };

    this.getReviews = this.getReviews.bind(this);
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
    let { productId } = this.state;

    Axios.get(`/api/${productId}`)
      .then(result => {
        this.setState({
          reviews: result.data[0].reviews
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div id="Reviews" className="col-12 col-md-10 offset-md-1">
        <div className="header">
          <h3 className="h3">ALO FAM REVIEWS</h3>
        </div>
        <div className="subheader">
          <div className="StarsUI">
            <span className="fill" style={{width: "91.1112%"}}></span>
          </div>
          <span className="large-p">|</span>
          <span className="large-p text">{this.state.reviews.length} Reviews</span>
        </div>
        <hr></hr>
      </div>
    );
  }
}