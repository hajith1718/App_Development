package com.hajith.services;

import com.hajith.dto.request.AuthenticationRequest;
import com.hajith.dto.request.RegisterRequest;
import com.hajith.dto.response.AuthenticationResponse;

public interface AuthService {
    boolean userRegistration(RegisterRequest request);

    AuthenticationResponse userAuthentication(AuthenticationRequest request);
}
