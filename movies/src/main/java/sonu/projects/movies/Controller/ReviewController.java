package sonu.projects.movies.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sonu.projects.movies.Models.Review;
import sonu.projects.movies.Services.ReviewService;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/reviews")
@CrossOrigin(origins = "http://localhost:5173")
public class ReviewController {
    @Autowired
    private ReviewService reviewService;

    @PostMapping("")
    public ResponseEntity<Review>createReview(@RequestBody Map<String, String> payload){

        if (!payload.containsKey("reviewBody") || !payload.containsKey("imdbId")) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST); // Return 400 if any required field is missing
        }
        Review createdReview = reviewService.createReview(payload.get("reviewBody"), payload.get("imdbId"));
        return new ResponseEntity<>(createdReview, HttpStatus.CREATED);
    }

    @GetMapping("/{imdbId}")
    public ResponseEntity<List<Review>> getReviewsByMovieId(@PathVariable String imdbId) {
        List<Review> reviews = reviewService.getReviewsByMovieId(imdbId);
        return new ResponseEntity<>(reviews, HttpStatus.OK);
    }

    @GetMapping("")
    public ResponseEntity<List<Review>> getAllReviews() {
        List<Review> reviews = reviewService.getAllReviews();
        return new ResponseEntity<>(reviews, HttpStatus.OK);
    }


}
