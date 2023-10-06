package com.hajith.Service;

import java.util.List;

import com.hajith.Dto.Userdto;
import com.hajith.Model.User;

public interface Userservice {


public User findUser(String email);

public void signupUser(User user);
public Userdto loginUser(User user);

public void updateUser(User user,String password);

public void uploaduserImage(User user,byte[] image);

public User findUserById(String id);
public List<User> getAllUsers();
public void saveUser(User user);

}
