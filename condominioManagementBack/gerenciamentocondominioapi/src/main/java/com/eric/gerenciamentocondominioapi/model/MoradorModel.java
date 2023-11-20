package com.eric.gerenciamentocondominioapi.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Document("morador")
public class MoradorModel {
    @Id
    private String id;
    private String name;
    private int numApto;
    private int numBloco;
    private String email;
    private String cpf;
    private Boolean adm;
}
