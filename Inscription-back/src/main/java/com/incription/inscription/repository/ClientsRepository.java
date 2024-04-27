package com.incription.inscription.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.incription.inscription.Entity.Clients;

import java.util.List;

@Repository
public interface ClientsRepository extends JpaRepository<Clients, Long> {
    @Query("SELECT c FROM Clients c WHERE c.firstName LIKE '%:firstName%'")
    List<Clients> find(@Param ( "firstName" ) String firstName);
}
