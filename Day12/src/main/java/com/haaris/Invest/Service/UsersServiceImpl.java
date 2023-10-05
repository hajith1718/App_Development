package com.haaris.Invest.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.haaris.Invest.Entity.Users;
import com.haaris.Invest.Repository.UsersRepository;

@Service
public class UsersServiceImpl implements UsersInterface{
	
	@Autowired
	private UsersRepository userRepo;
	
	@Override
	public Users saveUser(Users user) {
		userRepo.save(user);
		return user;
	}
	
	@Override
	public boolean isUserExist(String username) {
		return userRepo.existsByUsername(username);
	}
	@Override
	public boolean isUserIdExist(int id) {
		return userRepo.existsById(id);
	}
	@Override
	public String deleteUser(int id) {
		userRepo.deleteById(id);
		return "Successful";
	}
	
	@Override
	public String login(String username, String password) {
		if(userRepo.existsByUsername(username)) {
			Users user = userRepo.findByUsername(username);
			if(user.getPassword().equals(password)) {
				return "Login Successful";
			}
			return "Password is Invalid";
		}
		return "Username is Invalid";
	}
}

