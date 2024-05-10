package com.alpl.www.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alpl.www.entity.User;
import com.alpl.www.repository.UserRepository;

@Service
public class UserService {

    private final UserRepository repository;

    @Autowired
    public UserService(UserRepository repository) {
        this.repository = repository;
    }

    /**
     * Retrieve all users from the database.
     * @return a list of all users.
     */
    public List<User> findAll() {
        return repository.findAll();
    }

    /**
     * Retrieve a user by their ID.
     * @param id the ID of the user to find.
     * @return an Optional containing the user if found, otherwise an empty Optional.
     */
    public Optional<User> findById(String id) {
        return repository.findById(id);
    }

    /**
     * Save a new user to the database or update an existing user.
     * @param user the user to save or update.
     * @return the saved user.
     */
    public User save(User user) {
        return repository.save(user);
    }

    /**
     * Update an existing user in the database.
     * @param id the ID of the user to update.
     * @param user the new user data.
     * @return the updated user.
     */
    public User update(String id, User user) {
        // Set the ID for the user to update
        user.setId(id);
        return repository.save(user);
    }

    /**
     * Delete a user by their ID from the database.
     * @param id the ID of the user to delete.
     */
    public void delete(String id) {
        repository.deleteById(id);
    }
}
