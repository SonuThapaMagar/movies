import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Container, Col } from 'react-bootstrap';
import api from '../../api/axiosConfig';
import ReviewForm from '../reviewForm/ReviewForm';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [movie, setMovie] = useState(null); // State to hold movie data
  const revText = useRef(); // Ref for review input

  useEffect(() => {
    if (movieId) {
      // Fetch movie data and reviews only when movieId changes
      getMovieData(movieId);
      fetchReviews(movieId);
    }
  }, [movieId]);

  const getMovieData = async (id) => {
    // Function to fetch movie data from API
    try {
      const response = await api.get(`/v1/movies/${id}`); // Replace with actual endpoint
      setMovie(response.data);
    } catch (err) {
      console.error('Error fetching movie data:', err);
    }
  };

  const addReview = async (e) => {
    e.preventDefault();
    const rev = revText.current.value;

    if (!rev || !movieId) return; // Ensure review and movieId are defined

    try {
      // Save the new review to the server
      const response = await api.post('/v1/reviews', { reviewBody: rev, imdbId: movieId });
      const newReview = { id: response.data.id, reviewBody: rev };

      setReviews((prevReviews) => [...prevReviews, newReview]); // Add the new review to the state
      localStorage.setItem(`reviews_${movieId}`, JSON.stringify([...reviews, newReview])); // Save to local storage
      revText.current.value = ''; // Clear the input field
    } catch (err) {
      console.error('Error submitting review:', err);
    }
  };

  const fetchReviews = async (movieId) => {
    try {
      const response = await api.get(`/v1/reviews/${movieId}`);
      const fetchedReviews = response.data;
      setReviews(fetchedReviews); // Set the fetched reviews directly
      localStorage.setItem(`reviews_${movieId}`, JSON.stringify(fetchedReviews)); // Save fetched reviews to local storage
    } catch (err) {
      console.error('Error fetching reviews:', err);
    }

    // Load existing reviews from local storage if available
    const existingReviews = JSON.parse(localStorage.getItem(`reviews_${movieId}`)) || [];
    setReviews(existingReviews);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Reviews</h1>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col xs={12} md={6}>
          {movie?.poster ? (
            <img src={movie.poster} alt={movie.title || 'Movie Poster'} className="img-fluid" />
          ) : (
            <p>No Poster Available</p>
          )}
        </Col>
        <Col xs={12} md={6}>
          <ReviewForm
            handleSubmit={addReview}
            revText={revText}
            labelText="Write Review"
            reviews={reviews}
          />
          <hr />
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <div key={review.id}>
                <Row>
                  <Col>
                    <div>{review.reviewBody}</div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <hr />
                  </Col>
                </Row>
              </div>
            ))
          ) : (
            <p>No reviews yet.</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Reviews;
