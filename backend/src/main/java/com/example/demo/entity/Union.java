package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Timestamp;

@Data
@Entity
public class Union {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private Long adminId;

    @Column(name = "create_date", nullable = false)
    private Timestamp createDate;

    @Column(name = "update_date", nullable = false)
    private Timestamp updateDate;
}
