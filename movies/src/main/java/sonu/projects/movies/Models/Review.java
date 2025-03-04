package sonu.projects.movies.Models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "reviews")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Review {
    @Id
    private ObjectId id;
    private String reviewBody;
    private String imdbId;

    public Review(String reviewBody,String imdbId) {
        this.reviewBody = reviewBody;
        this.imdbId = imdbId;
    }
}
