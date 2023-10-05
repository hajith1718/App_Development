package com.example.newproject;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class CandidateController {
  @Autowired 
  private CandidateService candidateService;
  
  //save operation
  @PostMapping("/candidate")
  public Candidate saveCandidate(@RequestBody Candidate candidate)
  {
	  return candidateService.saveCandidate(candidate);
  }
  
  //read operation
  @GetMapping("/read-candidate")
  public List<Candidate> fetchCandidateList()
  {
	  return candidateService.fetchCandidateList();
  }
  
  //update operation
  @PutMapping("/update-candidate/{id}")
  public Candidate updateCandidate(@RequestBody Candidate candidate,@PathVariable("id") Long candidateId)
  {
	  return candidateService.updateCandidate(candidate, candidateId);
  }
  @DeleteMapping("/delete-candidate/{id}")
  public String deleteCandidateById(@PathVariable("id") Long candidateId)
  {
	  candidateService.deleteCandidateById(candidateId);
	  return "Deleted Successfully";
  }
}
