package com.eric.gerenciamentocondominioapi.controler;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eric.gerenciamentocondominioapi.model.MoradorModel;
import com.eric.gerenciamentocondominioapi.service.MoradorService;

@RestController
@RequestMapping("/morador")
public class MoradorControler {
    
    @Autowired
    private MoradorService moradorService;

    @GetMapping("")
    public List<MoradorModel> getAllMoradores(){
        List<MoradorModel> listRes = moradorService.findAll();
        return listRes;
    }
    
    @GetMapping("/name/{name}")
    public List<MoradorModel> getMoradorByName(@PathVariable String name){
        List<MoradorModel> listRes = moradorService.findByName(name);
        return listRes;
    }
    
    @GetMapping("/cpf/{cpf}")
    public List<MoradorModel> getMoradorByCpf(@PathVariable String cpf){
        List<MoradorModel> listRes = moradorService.findByCpf(cpf);
        return listRes;
    }
    
    @GetMapping("/email/{email}")
    public List<MoradorModel> getMoradorByEmail(@PathVariable String email){
        List<MoradorModel> listRes = moradorService.findByEmail(email);
        return listRes;
    }

    @PostMapping("")
    public void newMorador(@RequestBody MoradorModel newMorador){
        moradorService.save(newMorador);
    }

    @PutMapping("/update/{id}")
    public void putMorador(@RequestBody MoradorModel newMorador, @PathVariable String id){
        moradorService.save((String)id, (String) newMorador.getName(), (int) newMorador.getNumApto(), (int) newMorador.getNumBloco(),(String) newMorador.getCpf(), (String) newMorador.getEmail(), newMorador.getAdm());
    }

    @DeleteMapping("/delete/{id}")
    public void deleteUser(@PathVariable String id){
        moradorService.delete(id);
    }
}


