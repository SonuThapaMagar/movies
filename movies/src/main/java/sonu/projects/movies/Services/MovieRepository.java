package sonu.projects.movies.Services;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import sonu.projects.movies.Models.Movie;

@Repository
public interface MovieRepository extends MongoRepository<Movie, ObjectId> {
}
