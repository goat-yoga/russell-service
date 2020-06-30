import React from 'react';
import Axios from 'axios';
import StarsUI from './StarsUI.jsx';
import ReviewEntry from './ReviewEntry.jsx';
import Pagination from './Pagination.jsx';

export default class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productId: 'licensed-fresh-car',
      reviews: [],
      rating: 0,
      currentPage: 1,
      reviewsPerPage: 5,
    };

    this.getReviews = this.getReviews.bind(this);
    this.calculateAvgRating = this.calculateAvgRating.bind(this);
    this.paginate = this.paginate.bind(this);
    this.changePage = this.changePage.bind(this);
    this.selectPage = this.selectPage.bind(this);
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
        }, this.calculateAvgRating);
      })
      .catch(err => {
        console.error(err);
      });
  }

  calculateAvgRating() {
    let counter = 0;

    for (let review of this.state.reviews) {
      counter += review.rating;
    }

    let rating = counter / this.state.reviews.length;

    this.setState({
      rating: rating
    });
  }

  paginate() {
    let { currentPage, reviewsPerPage, reviews } = this.state;
    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;

    return reviews.slice(indexOfFirstReview, indexOfLastReview);
  }

  changePage(next) {
    this.setState({
      currentPage: next ? this.state.currentPage + 1 : this.state.currentPage - 1
    });
  }

  selectPage(page) {
    this.setState({
      currentPage: page
    });
  }

  render() {
    return (
      <div id="product-display" className="d-none d-md-block">
        <div className="description__line"></div>
        <div id="Reviews" className="col-12 col-md-10 offset-md-1">
          <div className="header">
            <h3 className="h3">ALO FAM REVIEWS</h3>
          </div>
          <div className="subheader">
            <StarsUI rating={this.state.rating} />
            <span className="large-p">|</span>
            <span className="large-p text">{this.state.reviews.length} Reviews</span>
          </div>
          <hr/>
          {this.paginate().map((review, i) => (
            <ReviewEntry key={i} review={review} />
          ))}
          <Pagination
            reviewsPerPage={this.state.reviewsPerPage}
            totalReviews={this.state.reviews.length}
            changePage={this.changePage}
            selectPage={this.selectPage}
            currentPage={this.state.currentPage}
          />
        </div>
      </div>
    );
  }
}