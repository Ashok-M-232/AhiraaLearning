package com.alpl.www.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class IdCounter {

    @Id
    private String id;  // Primary key, for your case it will always be "ALPL"
    
    private long currentCounter;  // The counter value

    // Getters and setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public long getCurrentCounter() {
        return currentCounter;
    }

    public void setCurrentCounter(long currentCounter) {
        this.currentCounter = currentCounter;
    }
    
}