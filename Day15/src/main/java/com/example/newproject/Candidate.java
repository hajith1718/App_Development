package com.example.newproject;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="studentdatabase")
public class Candidate {
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long candidateId;
	    private String firstName;
	    private String lastName;
	    private Long aadhar;
	    private Date dateOfBirth;
	    private Long contactNumber;
	    private String address;
	    private String city;
	    private String state;
	    private String email;
	    private String zipCode;

	    public Candidate() {
	    }

	    public Long getCandidateId() {
	        return candidateId;
	    }

	    public void setCandidateId(Long candidateId) {
	        this.candidateId = candidateId;
	    }

	    public String getFirstName() {
	        return firstName;
	    }

	    public void setFirstName(String firstName) {
	        this.firstName = firstName;
	    }

	    public String getLastName() {
	        return lastName;
	    }

	    public void setLastName(String lastName) {
	        this.lastName = lastName;
	    }

	    public Long getAadhar() {
	        return aadhar;
	    }

	    public void setAadhar(Long aadhar) {
	        this.aadhar = aadhar;
	    }

	    public Date getDateOfBirth() {
	        return dateOfBirth;
	    }

	    public void setDateOfBirth(Date dateOfBirth) {
	        this.dateOfBirth = dateOfBirth;
	    }

	    public Long getContactNumber() {
	        return contactNumber;
	    }

	    public void setContactNumber(Long contactNumber) {
	        this.contactNumber = contactNumber;
	    }

	    public String getAddress() {
	        return address;
	    }

	    public void setAddress(String address) {
	        this.address = address;
	    }

	    public String getCity() {
	        return city;
	    }

	    public void setCity(String city) {
	        this.city = city;
	    }
	    public String getState() {
	    	return state;
	    }
	    
	    public void setState(String state) {
	    	this.state = state;
	    }

	    public String getEmail() {
	        return email;
	    }

	    public void setEmail(String email) {
	        this.email = email;
	    }

	    public String getZipCode() {
	        return zipCode;
	    }

	    public void setZipCode(String zipCode) {
	        this.zipCode = zipCode;
	    }

	    @Override
	    public String toString() {
	        return "Candidate{" +
	                "candidateId=" + candidateId +
	                ", firstName='" + firstName + '\'' +
	                ", lastName='" + lastName + '\'' +
	                ", aadhar=" + aadhar +
	                ", dateOfBirth=" + dateOfBirth +
	                ", contactNumber=" + contactNumber +
	                ", address='" + address + '\'' +
	                ", city='" + city + '\'' +
	                ", state='" + state + '\'' +
	                ", email='" + email + '\'' +
	                ", zipCode='" + zipCode + '\'' +
	                '}';
	    }
	
	

}