package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Timestamp;
import java.time.Instant;

@Data
@Entity
@Table(schema = "crowd_sourcing", name = "order_table")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "worker_id", columnDefinition = "int UNSIGNED not null")
    private Long workerId;

    @Column(name = "task_id", columnDefinition = "int UNSIGNED not null")
    private Long taskId;

    @Column(name = "end_date", nullable = false)
    private Instant endDate;

    @Column(name = "status", nullable = false)
    private Boolean status = false;

    @Column(name = "user_id", columnDefinition = "int UNSIGNED not null")
    private Long userId;

    @Column(name = "create_time", nullable = false)
    private Timestamp createTime;

    @Column(name = "end_time", nullable = false)
    private Timestamp endTime;
}
