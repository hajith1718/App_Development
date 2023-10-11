package com.hajith.Service;

import java.util.List;

import com.hajith.Model.Usercampaigns;

public interface Usercampaignservice {


  public boolean saveUsercampaigns(Usercampaigns campaigns);
  public List<Usercampaigns> getAllCampaignsList();


}
