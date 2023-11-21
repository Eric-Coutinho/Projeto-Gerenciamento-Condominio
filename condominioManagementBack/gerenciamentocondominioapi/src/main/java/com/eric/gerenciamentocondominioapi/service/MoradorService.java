package com.eric.gerenciamentocondominioapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eric.gerenciamentocondominioapi.model.MoradorModel;
import com.eric.gerenciamentocondominioapi.repository.MoradorRepository;

@Service
public class MoradorService {

    @Autowired
    private MoradorRepository moradorRepository;

    public MoradorModel save(MoradorModel moradorModel){
        return this.moradorRepository.save(moradorModel);
    }

    public void save(String id, String name, int numApto, int numBloco, String email, String cpf, boolean adm){
        this.moradorRepository.save(new MoradorModel(id, name, numApto, numBloco, email, cpf, adm));
    }

    public List<MoradorModel> findAll(){
        return (List<MoradorModel>) this.moradorRepository.findAll();
    }

    public List<MoradorModel> findByName(String name){
        return (List<MoradorModel>) this.moradorRepository.findByName(name);
    }
    
    public List<MoradorModel> findByCpf(String cpf){
        return (List<MoradorModel>) this.moradorRepository.findByCpf(cpf);
    }

    public List<MoradorModel> findByEmail(String email){
        return (List<MoradorModel>) this.moradorRepository.findByEmail(email);
    }

    public void delete(String id){
        this.moradorRepository.deleteById(id);
    }
}
