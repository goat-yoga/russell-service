import React from 'react';
import Axios from 'axios';
import StarsUI from './StarsUI.jsx';
import ReviewEntry from './ReviewEntry.jsx';
import Pagination from './Pagination.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productId: 'handcrafted-metal-bike',
      reviews: [],
      rating: 0,
      currentPage: 1,
      reviewsPerPage: 5,
    };

    this.getReviews = this.getReviews.bind(this);
    this.calculateAvgRating = this.calculateAvgRating.bind(this);
    this.paginate = this.paginate.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.changePage = this.changePage.bind(this);
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

  nextPage() {
    let { reviews, reviewsPerPage, currentPage } = this.state;
    let lastPage = Math.ceil(reviews.length / reviewsPerPage);

    if (currentPage < lastPage) {
      this.setState({
        currentPage: this.state.currentPage + 1
      });
    }
  }

  previousPage() {
    let { currentPage } = this.state;

    if (currentPage > 1) {
      this.setState({
        currentPage: this.state.currentPage - 1
      });
    }
  }

  changePage(page) {
    this.setState({
      currentPage: page
    });
  }

  render() {
    return (
      <div id="Reviews" className="col-12 col-md-10 offset-md-1">
        <div className="header">
          <h3 className="h3">ALO FAM REVIEWS</h3>
        </div>
        <div className="subheader">
          <StarsUI rating={this.state.rating} />
          <span className="large-p">|</span>
          <span className="large-p text">{this.state.reviews.length} Reviews</span>
        </div>
        <hr></hr>
        {this.paginate().map((review, i) => (
          <ReviewEntry key={i} review={review} />
        ))}
        <Pagination
          reviewsPerPage={this.state.reviewsPerPage}
          totalReviews={this.state.reviews.length}
          nextPage={this.nextPage}
          previousPage={this.previousPage}
          changePage={this.changePage}
        />
      </div>
    );
  }
}