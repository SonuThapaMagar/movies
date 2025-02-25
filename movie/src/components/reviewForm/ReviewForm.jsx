import React from 'react'
import { Form, Button } from 'react-bootstrap';

const ReviewForm = ({ handleSubmit, revText, labelText,defaultValue,reviews=[] }) => {
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>{labelText}</Form.Label>
                    <Form.Control ref={revText} as="textarea" rows={3} defaultValue={defaultValue} />
                </Form.Group>
                <Button variant='outline-info' type="submit">
                    Submit
                </Button>
            </Form>

            {/* Display previous reviews */}
            <div className="previous-reviews mt-4">
                <h3>Previous Reviews</h3>
                {reviews.length===0?(
                    <p>No reviews yet.</p>
                ):(
                    <ul>
                        {reviews.map((review,index) => (
                            <li key={index}>{review.body}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default ReviewForm 
