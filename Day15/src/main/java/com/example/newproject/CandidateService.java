package com.example.newproject;

import java.util.List;


public interface CandidateService {

	 // Save operation
	 Candidate saveCandidate(Candidate candidate);

	 // Read operation
	 List<Candidate> fetchCandidateList();

	 // Update operation
	 Candidate updateCandidate(Candidate candidate,
	                             Long candidateId);

	 // Delete operation
	 void deleteCandidateById(Long candidateId);
	}