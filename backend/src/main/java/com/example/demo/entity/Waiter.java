package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@IdClass(Waiter.class)
@Table(name = "order_worker")
public class Waiter {
    @Id
    @Column(name = "task_id")
    Long taskId;

    @Id
    @Column(name = "worker_id")
    Long workerId;
}
