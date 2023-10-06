package com.hajith.Service;


import com.hajith.Dto.request.Authenticationrequest;
import com.hajith.Dto.request.Userregisterrequest;
import com.hajith.Dto.response.Authenticationresponse;

public interface Authservice {
  boolean userRegistration(Userregisterrequest request);

  Authenticationresponse userAuthentication(Authenticationrequest request);

}
