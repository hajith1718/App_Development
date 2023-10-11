package com.hajith.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hajith.Model.Usercampaigns;

public interface Usercampaignsrepo extends JpaRepository<Usercampaigns,String>  {


  Usercampaigns findCampaignById(String id);



}
