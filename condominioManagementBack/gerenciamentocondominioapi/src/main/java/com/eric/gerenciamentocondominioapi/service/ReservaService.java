package com.eric.gerenciamentocondominioapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eric.gerenciamentocondominioapi.model.ReservaModel;
import com.eric.gerenciamentocondominioapi.repository.ReservaRepository;

@Service
public class ReservaService {
    @Autowired
    private ReservaRepository reservaRepository;

    public ReservaModel save(ReservaModel ReservaModel) {
        return this.reservaRepository.save(ReservaModel);
    }

    public List<ReservaModel> findByDate(String tipo, String date) {
        return (List<ReservaModel>) this.reservaRepository.findByDate(tipo, date);
    }

    public List<ReservaModel> findAll() {
        return (List<ReservaModel>) this.reservaRepository.findAll();
    }

    public void delete(String id) {
        this.reservaRepository.deleteById(id);
    }
}
