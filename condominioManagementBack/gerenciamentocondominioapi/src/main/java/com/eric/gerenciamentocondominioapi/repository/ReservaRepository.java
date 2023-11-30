package com.eric.gerenciamentocondominioapi.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.eric.gerenciamentocondominioapi.model.ReservaModel;

public interface ReservaRepository extends MongoRepository<ReservaModel, String>{
    @Query("{'tipo': ?0, 'date': ?1}")
    List<ReservaModel> findByDate(String tipo, String date);
}
