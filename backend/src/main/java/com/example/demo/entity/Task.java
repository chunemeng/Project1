package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Timestamp;
import java.time.Instant;

@Data
@Entity
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private Long userId;

    private Long workerId;

    private Long money;

    private Short category;

    private Boolean status;

    @Column(name = "description")
    private String description;

    @Column(name = "create_date", nullable = false)
    private Timestamp createDate;

    @Column(name = "update_date", nullable = false)
    private Timestamp updateDate;

    @Column(name = "duration", nullable = false)
    private Timestamp duration;
}
