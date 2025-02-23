import React from 'react'
import { useEffect } from 'react'
import api from '../../api/axiosConfig'
import { useParams } from 'react-router-dom'
import { Row, Container, Col } from 'react-bootstrap'
import ReviewForm from '../reviewForm/reviewForm'

const Reviews = (getMovieData, movie, reviews, setReviews) => {
    const revText = useRef();
    let params = useParams();
    const movieId = params.id;


    useEffect(() => {

        getMovieData(movieId);

    }, []);

    const addReview = async (e) => {
        e.preventDefault();
        try {
            const rev = revText.current;
            const response = await api.post("/api/v1/reviews", { reviewBody: rev.value, imdbId: movieId });
            const updatedReviews = [...reviews, { body: rev.value }];
            rev.value = "";
            setReviews(updatedReviews);
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
                <Col><img src={movie?.poster} alt="" /></Col>
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
                    },
                    {
                        reviews ? Col.map((r) => {
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
                        }) : null
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
import { useEffect } from 'react'
export default Reviews
