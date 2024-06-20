package com.example.demo.dto;

import lombok.Data;

@Data
public class AuthDto {
    private Long id;
    private String password;

    public AuthDto(Long id, String password) {
        this.id = id;
        this.password = password;
    }
}
