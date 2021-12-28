package com.harzle.crudspring;

import com.harzle.crudspring.model.Course;
import com.harzle.crudspring.repository.CourseRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(CourseRepository courseRepository){
		return args -> {
		courseRepository.deleteAll();
		Course c = new Course();
		c.setName("Java");
		c.setCategory("back-end");
		courseRepository.save(c);
		};
	}
}
