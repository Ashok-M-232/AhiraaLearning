package com.alpl.www.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alpl.www.entity.PersonDetails;
import com.alpl.www.repository.PersonDetailsRepository;

@Service
public class PersonDetailsService {

    private final PersonDetailsRepository repository;

    @Autowired
    public PersonDetailsService(PersonDetailsRepository repository) {
        this.repository = repository;
    }

    public List<PersonDetails> findAll() {
        return repository.findAll();
    }

    public Optional<PersonDetails> findById(Long id) {
        return repository.findById(id);
    }

    public PersonDetails save(PersonDetails personDetails) {
        return repository.save(personDetails);
    }

    public PersonDetails update(Long id, PersonDetails personDetails) {
        personDetails.setId(id);
        return repository.save(personDetails);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}