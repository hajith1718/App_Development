//package com.hajith.repository;
//
//import java.util.Optional;
//
//import org.springframework.data.jpa.repository.JpaRepository;
//
//import com.hajith.model.Mutual;
//
//public interface MutualRepository extends JpaRepository<Mutual, Long> {
//
//    Optional<Mutual> findByProductName(String mutualName);
//
//    Mutual findByMid(Long mid);
//
//    void deleteByMid(Long mid);
//
//}
