package com.harzle.crudspring.controller;

import com.harzle.crudspring.model.Course;
import com.harzle.crudspring.repository.CourseRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/courses")
@AllArgsConstructor
public class CoursesController {

    private final CourseRepository courseRepository;


    @GetMapping
    public List<Course> getCourses(){
        return courseRepository.findAll();
    }
}
