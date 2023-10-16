package com.hajith.services;

import java.util.List;

import com.hajith.dto.request.UserRequest;
import com.hajith.dto.response.CountResponse;
import com.hajith.dto.response.UserResponse;

public interface UserService {

    List<UserResponse> getAllUsers();

    UserResponse getUser(Long uid);

    UserResponse updateUser(UserRequest request, Long uid);

//    boolean deleteProduct(Long uid);

    CountResponse userCount();

}
