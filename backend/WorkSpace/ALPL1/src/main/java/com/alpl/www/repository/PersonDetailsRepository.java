package com.alpl.www.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.alpl.www.entity.PersonDetails;

@Repository
public interface PersonDetailsRepository extends JpaRepository<PersonDetails, Long> {
    // Additional query methods can be added here if needed
}