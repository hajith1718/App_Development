package com.haaris.Invest.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.haaris.Invest.Entity.Users;



public interface UsersRepository extends JpaRepository<Users,Integer>{
	boolean existsByUsername(String username);
	
	Users findByUsername(String username);
}
