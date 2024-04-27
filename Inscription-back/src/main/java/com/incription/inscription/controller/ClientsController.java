package com.incription.inscription.controller;

import com.incription.inscription.Entity.Clients;
import com.incription.inscription.service.ClientsService;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@AllArgsConstructor
@RequestMapping("/clients")
public class ClientsController {
    private final ClientsService clientsService;
    @GetMapping("/")
    public List<Clients> getClients(){
        return this.clientsService.findAll ();
    }

    @PostMapping("/add")
    public Clients createClient (@RequestBody Clients clients){
        return this.clientsService.save ( clients );
    }

    // 
    @PutMapping("/put")
    public Clients updatClient (@RequestBody Clients clients){
        return this.clientsService.updateById(clients);
    }
    // 

    @DeleteMapping("/delete/{id}")
    public Clients delete (@PathVariable Long id){
        return this.clientsService.deleteById(id);
    }
}
