package com.cuscoicultural.controller;

import com.cuscoicultural.model.Patrimonio;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/patrimonios")
public class PatrimonioController {

    private static final List<Patrimonio> listaPatrimonios = new ArrayList<>();

    static {
        listaPatrimonios.add(new Patrimonio(1L, "Catedral del Cusco", "Principal monumento religioso de la ciudad construido sobre un palacio inca.", "Arquitectura", "Centro Histórico de Cusco", "ACTIVO"));
        listaPatrimonios.add(new Patrimonio(2L, "Qorikancha", "Templo más importante dedicado al dios Sol en el Imperio Inca.", "Sitio Arqueológico", "Av. El Sol, Cusco", "ACTIVO"));
    }

    @GetMapping
    public ResponseEntity<List<Patrimonio>> obtenerPatrimonios() {
        return ResponseEntity.ok(listaPatrimonios);
    }

    @PostMapping
    public ResponseEntity<?> registrarPatrimonio(@RequestBody Patrimonio nuevoPatrimonio) {
        if (nuevoPatrimonio.getNombre() == null || nuevoPatrimonio.getNombre().trim().isEmpty() ||
            nuevoPatrimonio.getDescripcion() == null || nuevoPatrimonio.getDescripcion().trim().isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Error: El nombre y la descripción son obligatorios.");
        }

        Long nuevoId = (long) (listaPatrimonios.size() + 1);
        nuevoPatrimonio.setId(nuevoId);
        nuevoPatrimonio.setEstado("PENDIENTE");
        
        listaPatrimonios.add(nuevoPatrimonio);
        
        return ResponseEntity.status(HttpStatus.CREATED).body(nuevoPatrimonio);
    }
}