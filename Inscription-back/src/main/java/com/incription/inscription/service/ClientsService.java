package com.incription.inscription.service;

import com.incription.inscription.Entity.Clients;
import com.incription.inscription.repository.ClientsRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Service
@RequiredArgsConstructor
@Transactional

public class ClientsService implements CrudOperations<Clients, Long>{
    private final ClientsRepository clientsRepository;
    @Override
    public List<Clients> findAll(){
        return this.clientsRepository.findAll ();
    }

    @Override
    public Clients findById(Long id){
        return this.clientsRepository.findById ( id ).orElseThrow();
    }

    @Override
    public Clients deleteById(Long id){
       Clients clients = this.clientsRepository.findById(id).orElse(null);
       if (clients != null) {
         this.clientsRepository.deleteById(id);
       }
     return clients;
    }

    @Override
    public Clients updateById(Clients toUpdate){
        Clients clients = this.clientsRepository.findById(toUpdate.getId()).orElse(null);
       if (clients != null) {
          return this.clientsRepository.save(toUpdate);
       }
      throw new RuntimeException("clients not fond");
    }

    @Override
    public Clients save(Clients toSave){
        return this.clientsRepository.save ( toSave );
    }
}
