package com.alpl.www.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "form_data")
public class FormEntity {

    @Id
    private String paymentID;

    @Column
    private String name;
    @Column
    private String fatherName;
    @Column
    private String phoneNumber;
    @Column
    private String email;
    @Column
    private String college;
    @Column
    private double paymentAmount;
    @Column
    private double paymentBalance;
    @Column
    private String projectName;
    @Column
    private String staffName;
    @Column
    private String dateTime;
	public String getPaymentID() {
		return paymentID;
	}
	public void setPaymentID(String paymentID) {
		this.paymentID = paymentID;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getFatherName() {
		return fatherName;
	}
	public void setFatherName(String fatherName) {
		this.fatherName = fatherName;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getCollege() {
		return college;
	}
	public void setCollege(String college) {
		this.college = college;
	}
	public double getPaymentAmount() {
		return paymentAmount;
	}
	public void setPaymentAmount(double paymentAmount) {
		this.paymentAmount = paymentAmount;
	}
	public double getPaymentBalance() {
		return paymentBalance;
	}
	public void setPaymentBalance(double paymentBalance) {
		this.paymentBalance = paymentBalance;
	}
	public String getProjectName() {
		return projectName;
	}
	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}
	public String getStaffName() {
		return staffName;
	}
	public void setStaffName(String staffName) {
		this.staffName = staffName;
	}
	public String getDateTime() {
		return dateTime;
	}
	public void setDateTime(String dateTime) {
		this.dateTime = dateTime;
	} 
    
    
    // Date and time of submission

//     Getters and setters for all fields
//    public String getPaymentID() {
//        return paymentID;
//    }
//
//    public void setPaymentID(String paymentID) {
//        this.paymentID = paymentID;
//    }

    // Add getters and setters for all other fields
    // ...
}