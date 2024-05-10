package com.alpl.www.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alpl.www.entity.FormEntity;
import com.alpl.www.service.FormService;

@RestController
@RequestMapping("/api/form")
public class FormController {

    @Autowired
    private FormService formService;

    // Allow cross-origin requests from http://localhost:3000
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/add")
    public FormEntity addForm(@RequestBody FormEntity formEntity) {
        return formService.createForm(formEntity);
    }

    // Allow cross-origin requests from http://localhost:3000
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping
    public List<FormEntity> getAllForms() {
        return formService.getAllForms();
    }

    // Allow cross-origin requests from http://localhost:3000
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/{paymentID}")
    public FormEntity getFormByPaymentID(@PathVariable String paymentID) {
        return formService.getFormByPaymentID(paymentID);
    }

    // Allow cross-origin requests from http://localhost:3000
    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping
    public FormEntity updateForm(@RequestBody FormEntity formEntity) {
        return formService.updateForm(formEntity);
    }

    // Allow cross-origin requests from http://localhost:3000
    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/{paymentID}")
    public void deleteFormByPaymentID(@PathVariable String paymentID) {
        formService.deleteFormByPaymentID(paymentID);
    }
}