package sonu.projects.movies; //package name

import org.springframework.boot.SpringApplication; //importing spring boot application
import org.springframework.boot.autoconfigure.SpringBootApplication;//importing spring boot application annotation
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class MoviesApplication {

	public static void main(String[] args) {
		SpringApplication.run(MoviesApplication.class, args);
	}

	@GetMapping("/root")
	public String hello() {
		return "Hello World";
	}
}
