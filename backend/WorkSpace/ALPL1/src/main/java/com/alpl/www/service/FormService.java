package com.alpl.www.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alpl.www.entity.FormEntity;
import com.alpl.www.repository.FormRepository;

@Service
public class FormService {

    @Autowired
    private FormRepository formRepository;

    // Create a new form entry
    public FormEntity createForm(FormEntity formEntity) {
        return formRepository.save(formEntity);
    }

    // Get all form entries
    public List<FormEntity> getAllForms() {
        return formRepository.findAll();
    }

    // Get form entry by payment ID
    public FormEntity getFormByPaymentID(String paymentID) {
        Optional<FormEntity> optionalForm = formRepository.findById(paymentID);
        return optionalForm.orElse(null); // Return form entity or null if not found
    }

    // Update form entry
    public FormEntity updateForm(FormEntity formEntity) {
        // Check if the form entry exists in the repository
        if (formRepository.existsById(formEntity.getPaymentID())) {
            return formRepository.save(formEntity);
        } else {
            throw new IllegalArgumentException("Form entry not found.");
        }
    }

    // Delete form entry by payment ID
    public void deleteFormByPaymentID(String paymentID) {
        formRepository.deleteById(paymentID);
    }
}