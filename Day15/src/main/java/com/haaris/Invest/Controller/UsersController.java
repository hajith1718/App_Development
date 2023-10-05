package com.haaris.Invest.Controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.haaris.Invest.Entity.Users;
import com.haaris.Invest.Service.UsersServiceImpl;


@RestController
@CrossOrigin("*")
public class UsersController {
	
	@Autowired
	private UsersServiceImpl userservice;
	
	@GetMapping("/login")
	public String login(@RequestParam String username, @RequestParam String password) {
		return userservice.login(username, password);
	}
	
	@PostMapping("/signup")
	public Users signup(@RequestBody Users user) {
		userservice.saveUser(user);
		return user;
	}
	
	@DeleteMapping("/deleteuser/{id}")
	public String deleteUser(@PathVariable int id) {
		if(userservice.isUserIdExist(id)) {
			userservice.deleteUser(id);
			return "Successful";
		}
		else {
			return "Failed to delete";
		}
	}
}

