package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.sql.Timestamp;
import java.time.Instant;

@Data
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nickname;
    @JsonIgnore
    private String username;
    @JsonIgnore
    private String password;
    private String cover;
    private String email;
    private boolean status;
    @Column(name = "worker_id", columnDefinition = "int UNSIGNED")
    private Long workId;
}
