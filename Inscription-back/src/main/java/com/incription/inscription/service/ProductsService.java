package com.incription.inscription.service;

import com.incription.inscription.Entity.Products;
import com.incription.inscription.repository.ProductsRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Service
@RequiredArgsConstructor
@Transactional

public class ProductsService implements CrudOperations<Products, Long> {
    private final ProductsRepository productsRepository;
    @Override
    public List<Products> findAll(){
        return this.productsRepository.findAll ();
    }

    @Override
    public Products findById(Long id){
        return this.productsRepository.findById ( id ).orElse ( null );
    }

    @Override
    public Products deleteById(Long id){
       Products products = this.productsRepository.findById(id).orElse(null);
       if (products != null) {
         this.productsRepository.deleteById(id);
       }
     return products;
    }

    @Override
    public Products updateById(Products toUpdate){
        Products products = this.productsRepository.findById(toUpdate.getId()).orElse(null);
       if (products != null) {
          return this.productsRepository.save(toUpdate);
       }
      throw new RuntimeException("products not fond");
    }

    @Override
    public Products save(Products toSave){
        return this.productsRepository.save ( toSave );
    }
}
