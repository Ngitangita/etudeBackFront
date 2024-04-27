package com.incription.inscription.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.incription.inscription.Entity.Products;

import java.util.List;

@Repository
public interface ProductsRepository extends JpaRepository<Products, Long> {
    @Query("SELECT p FROM Products p WHERE p.productName LIKE '%:productName%'")
    List<Products> find(@Param ( "productName" ) String productName);
}
