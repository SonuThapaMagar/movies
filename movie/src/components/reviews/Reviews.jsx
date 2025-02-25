import React from 'react'
import { useEffect } from 'react'
import api from '../../api/axiosConfig'
import { useParams } from 'react-router-dom'
import { Row, Container, Col } from 'react-bootstrap'
import { useRef } from 'react';
import ReviewForm from '../reviewForm/reviewForm'

const Reviews = ({ getMovieData, movie, reviews, setReviews }) => {
    const revText = useRef();
    let params = useParams();
    const movieId = params.movieId;

    useEffect(() => {

        if (movieId) {
            getMovieData(movieId);
            fetchReviews(movieId);
        }

    }, [getMovieData, movieId]);

    const addReview = async (e) => {
        e.preventDefault();
        try {
            const rev = revText.current.value;

            if (!movieId) {
                console.log("Movie ID is undefined");
                return; // Exit if movieId is not defined
            }
            const response = await api.post("/v1/reviews", { reviewBody: rev, imdbId: movieId });

            if (response.data) { // Ensure response contains new data
                const newReview = {
                    id: response.data.id, // Include ID for future reference
                    body: rev,
                };
                setReviews([...reviews, newReview]);
            }

            revText.current.value = ""; // Clear input
        } catch (err) {
            console.log("Error submitting review:", err);
        }
    };

    //Fetch reviews
    const fetchReviews = async (movieId) => {
        try {
            const response = await api.get(`/v1/reviews/${movieId}`);
            if (JSON.stringify(reviews) !== JSON.stringify(response.data)) {
                setReviews(response.data);
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Reviews</h1>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    {movie?.poster ? (
                        <img src={movie.poster} alt={movie.title || "Movie Poster"} />
                    ) : (
                        <p>No Poster Available</p>
                    )}
                </Col>
                <Col>
                    {
                        <>
                            <Row>
                                <Col>
                                    <ReviewForm handleSubmit={addReview} revText={revText} reviews={reviews} labelText="Write Review" />
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <hr />

                                </Col>
                            </Row>
                        </>
                    }
                    {
                        reviews?.map((r) => {
                            return (
                                <div key={r.id}>
                                    <Row>
                                        <Col>
                                            {r.body}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <hr />

                                        </Col>
                                    </Row>
                                </div>
                            )
                        })
                    }
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr />

                </Col>
            </Row>
        </Container>
    )
}
export default Reviews
