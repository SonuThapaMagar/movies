import React from 'react';
import { Form, Button } from 'react-bootstrap';

const ReviewForm = ({ handleSubmit, revText, labelText, reviews = [] }) => {
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>{labelText}</Form.Label>
                    <Form.Control 
                        ref={revText} 
                        as="textarea" 
                        rows={3} 
                        required
                    />
                </Form.Group>
                <Button variant='outline-info' type="submit">
                    Submit
                </Button>
            </Form>

            {/* Display previous reviews */}
            <div className="previous-reviews mt-4">
                <h3 style={{ color: 'white' }}>Previous Reviews</h3> {/* Make the heading white */}
                {reviews.length === 0 ? (
                    <p style={{ color: 'white' }}>No reviews yet.</p> 
                ) : (
                    <ul>
                        {reviews.map((review) => (
                            <li key={review.id} style={{ color: 'white' }}>{review.reviewBody}</li> 
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default ReviewForm;
