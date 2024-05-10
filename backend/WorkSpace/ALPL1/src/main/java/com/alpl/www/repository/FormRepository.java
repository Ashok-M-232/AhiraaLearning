package com.alpl.www.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.alpl.www.entity.FormEntity;

@Repository
public interface FormRepository extends JpaRepository<FormEntity, String> {
    // JpaRepository provides basic CRUD methods
}
