import React from 'react'
import { useEffect } from 'react'
import api from '../../api/axiosConfig'
import { useParams } from 'react-router-dom'
import { Row, Container, Col } from 'react-bootstrap'
import ReviewForm from '../reviewForm/ReviewForm'
import { useRef } from 'react';


const Reviews = ({ getMovieData, movie, reviews, setReviews }) => {
    const revText = useRef();
    let params = useParams();
    const movieId = params.movieId;

    useEffect(() => {

        if (movieId) {
            getMovieData(movieId);
        }

    }, [getMovieData, movieId]);

    const addReview = async (e) => {
        e.preventDefault();
        try {
            const rev = revText.current.value;
            const response = await api.post("/api/v1/reviews", { reviewBody: rev, imdbId: movieId });

            if (response.data) { // Ensure response contains new data
                setReviews([...reviews, { body: rev }]);
            }

            revText.current.value = ""; // Clear input
        } catch (err) {
            console.log("Error submitting review:", err);
        }
    };

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
                                    <ReviewForm handleSubmit={addReview} revText={revText} labelText="Write Review" />
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
                                <>
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
                                </>
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
