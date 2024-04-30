package com.incription.inscription.controller;



import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import com.incription.inscription.Entity.Products;
import com.incription.inscription.service.ProductsService;

import java.util.List;

@RestController
@CrossOrigin
@AllArgsConstructor
@RequestMapping("/products")

public class ProductsController {
    private final ProductsService productsService;
    @GetMapping("/")
    public List<Products> getClients(){
        return this.productsService.findAll ();
    }


    @PostMapping("/add")
    public Products createClient (@RequestBody Products products){
        return this.productsService.save ( products );
    }

    // 
    @PutMapping("/put")
    public Products updatClient (@RequestBody Products products){
        return this.productsService.updateById(products);
    }
    // 

    @DeleteMapping("/delete/{id}")
    public Products delete (@PathVariable Long id){
        return this.productsService.deleteById(id);
    }
}
