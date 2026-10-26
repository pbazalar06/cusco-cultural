package com.cuscocultural.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/patrimonios")
public class PatrimonioController {

    @PostMapping
    public ResponseEntity<String> crearPatrimonio(@RequestBody String patrimonio) {
        // Lógica temporal para validar el POST
        return new ResponseEntity<>("Patrimonio creado con éxito", HttpStatus.CREATED);
    }
}