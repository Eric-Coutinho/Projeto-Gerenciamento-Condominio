package com.eric.gerenciamentocondominioapi.controler;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eric.gerenciamentocondominioapi.model.ReservaModel;
import com.eric.gerenciamentocondominioapi.service.ReservaService;

@RestController
@RequestMapping("/reserva")
public class ReservaControler {
    @Autowired
    private ReservaService reservaService;

    @GetMapping("")
    public List<ReservaModel> getAllReservas(){
        List<ReservaModel> listRes = reservaService.findAll();
        return listRes;
    }

    @GetMapping("tipo/{tipo}/date/{date}")
    public List<ReservaModel> getReservationByDate(@PathVariable(value = "tipo") String tipo, @PathVariable(value = "date") String date) {
        List<ReservaModel> listRes = reservaService.findByDate(tipo, date);
        return listRes;
    }

    @PostMapping("")
    public void addReserva(@RequestBody ReservaModel newReserva){
        reservaService.save(newReserva);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteReserva(@PathVariable String id){
        reservaService.delete(id);
    }
    
}
