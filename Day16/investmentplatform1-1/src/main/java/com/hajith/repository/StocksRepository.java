package com.hajith.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hajith.model.Stocks;

public interface StocksRepository extends JpaRepository<Stocks, Long> {

    Optional<Stocks> findByProductName(String productName);

    Stocks findByPid(Long pid);

    void deleteByPid(Long pid);

}
