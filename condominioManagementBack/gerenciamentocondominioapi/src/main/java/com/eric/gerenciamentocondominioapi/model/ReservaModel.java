package com.eric.gerenciamentocondominioapi.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Document("reserva")
public class ReservaModel {
    @Id
    private String id;
    private String cpf;
    private String date;
    private String tipo;
}
