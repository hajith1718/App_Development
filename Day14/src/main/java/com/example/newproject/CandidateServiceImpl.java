package com.example.newproject;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.haaris.collegeAdmissionPortal.entity.Candidate;
import com.haaris.collegeAdmissionPortal.repository.CandidateRepository;
import com.haaris.collegeAdmissionPortal.service.CandidateService;

@Service
public class CandidateServiceImpl implements CandidateService{
 
	@Autowired
	private CandidateRepository candidateRepository;
	
	//save operation
	@Override
	public Candidate saveCandidate(Candidate candidate)
	{
		return candidateRepository.save(candidate);
	}
	
	//read operation
	@Override
	public List<Candidate> fetchCandidateList()
	{
		return (List<Candidate>) candidateRepository.findAll();
	}
	
	//update operation
	public Candidate updateCandidate (Candidate candidate,Long candidateId)
	{
		Candidate canDB=candidateRepository.findById(candidateId).get();
		
		if(Objects.nonNull(candidate.getFirstName()) 
				&& !"".equalsIgnoreCase(
				candidate.getFirstName())) {
			canDB.setFirstName(
					candidate.getFirstName());
		}
		if(Objects.nonNull(candidate.getLastName())
				&& !"".equalsIgnoreCase(
						candidate.getLastName())) {
			canDB.setLastName(
					candidate.getLastName());
		}
		if(Objects.nonNull(candidate.getAadhar())
				&&!"".equalsIgnoreCase(
						candidate.getAadhar())) {
			canDB.setAadhar(
					candidate.getAadhar());
		}
		if(Objects.nonNull(candidate.getDateOfBirth())
				&&!"".equalsIgnoreCase(
						candidate.getDateOfBirth())) {
			canDB.setDateOfBirth(
					candidate.getDateOfBirth());
		}
		if(Objects.nonNull(candidate.getContactNumber())
				&&!"".equalsIgnoreCase(
						candidate.getContactNumber())) {
			canDB.setContactNumber(
					candidate.getContactNumber());
		}
		if(Objects.nonNull(candidate.getEmail())
				&&!"".equalsIgnoreCase(
						candidate.getEmail())) {
			canDB.setEmail(
					candidate.getEmail());
		}
		if(Objects.nonNull(candidate.getAddress())
				&&!"".equalsIgnoreCase(
						candidate.getAddress())) {
			canDB.setAddress(
					candidate.getAddress());
		}
		if(Objects.nonNull(candidate.getCity())
				&&!"".equalsIgnoreCase(
						candidate.getCity())) {
			canDB.setCity(
					candidate.getCity());
		}
		if(Objects.nonNull(candidate.getState())
				&!"".equalsIgnoreCase(
						candidate.getState())) {
			canDB.setState(
					candidate.getState());
		}
		if(Objects.nonNull(candidate.getZipCode())
				&!"".equalsIgnoreCase(
						candidate.getZipCode())) {
			canDB.setZipCode(
					candidate.getZipCode());
		}
		 return candidateRepository.save(canDB);
		
	}
	
	//delete operation
	@Override
	public void deleteCandidateById(Long candidateId)
	{
		candidateRepository.deleteById(candidateId);
	}
}
