package com.cuscoicultural.model;

public class Patrimonio {
    private Long id;
    private String nombre;
    private String descripcion;
    private String categoria;
    private String ubicacion;
    private String estado;

    public Patrimonio(Long id, String nombre, String descripcion, String categoria, String ubicacion, String estado) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.ubicacion = ubicacion;
        this.estado = estado;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }
    public String getDescripcion() { return descripcion; }
    public void setDescripcion(String descripcion) { this.descripcion = descripcion; }
    public String getCategoria() { return categoria; }
    public void setCategoria(String categoria) { this.categoria = categoria; }
    public String getUbicacion() { return ubicacion; }
    public void setUbicacion(String ubicacion) { this.ubicacion = ubicacion; }
    public String getEstado() { return estado; }
    public void setEstado(String estado) { this.estado = estado; }
}