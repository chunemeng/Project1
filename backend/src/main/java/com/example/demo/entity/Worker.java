package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Timestamp;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

// 众包者实体类
// 继承自用户实体类
@Data
@Entity
@Table(name = "worker")
public class Worker{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    private String name;
    private String description;

    private Boolean status;

    @Column(name = "user_id", columnDefinition = "int UNSIGNED not null")
    private Long userId;

    @Column(name = "nickname", nullable = false, length = 50)
    private String nickname;

    @Column(name = "cover", nullable = false)
    private String cover;

    @Column(name = "create_date", nullable = false)
    private Timestamp createDate;

    @Column(name = "update_date", nullable = false)
    private Timestamp updateDate;

}
