package com.alpl.www.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alpl.www.entity.PersonDetails;
import com.alpl.www.service.PersonDetailsService;
@RestController
@RequestMapping("/api/person-details")
@CrossOrigin(origins = "http://localhost:3000") // Allow requests from http://localhost:3000
public class PersonDetailsController {

    private final PersonDetailsService service;

    @Autowired
    public PersonDetailsController(PersonDetailsService service) {
        this.service = service;
    }

    @GetMapping
    public List<PersonDetails> getAllPersonDetails() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<PersonDetails> getPersonDetailsById(@PathVariable Long id) {
        Optional<PersonDetails> personDetails = service.findById(id);
        return personDetails.map(ResponseEntity::ok)
                            .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public PersonDetails createPersonDetails(@RequestBody PersonDetails personDetails) {
        return service.save(personDetails);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PersonDetails> updatePersonDetails(@PathVariable Long id, @RequestBody PersonDetails personDetails) {
        PersonDetails updatedPersonDetails = service.update(id, personDetails);
        return ResponseEntity.ok(updatedPersonDetails);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePersonDetails(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}