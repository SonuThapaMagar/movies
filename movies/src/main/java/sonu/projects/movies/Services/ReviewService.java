package sonu.projects.movies.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;
import sonu.projects.movies.Models.Movie;
import sonu.projects.movies.Models.Review;

import java.util.List;

import static org.springframework.data.mongodb.core.aggregation.SelectionOperators.First.first;
import static org.springframework.data.mongodb.core.query.UntypedExampleMatcher.matching;

@Service
public class ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private MongoTemplate mongoTemplate;
    public Review createReview(String reviewBody, String imdbId){
        Review review = new Review(reviewBody,imdbId);
        reviewRepository.insert(review);

        mongoTemplate.update(Movie.class)
            .matching(Criteria.where("imdbId").is(imdbId))
            .apply(new Update().push("reviewIds").value(review))
            .first();
        return review;
    }

    public List<Review> getReviewsByMovieId(String imdbId) {
        return reviewRepository.findByImdbId(imdbId);
    }

    public List<Review> getAllReviews() {
        return reviewRepository.findAll();
    }
}
