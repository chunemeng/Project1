package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

// 招募者实体类
// 继承自用户实体类
@Data
@Entity
@Table(name = "recruiter_id")
public class Recruiter extends User{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    // 与个人任务形成一对多映射关系
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "worker_id", cascade = CascadeType.ALL)
    private List<Task> tasks;

    public Recruiter(){
        this.tasks = new ArrayList<Task>();
    }

    public Recruiter(String name,List<Task> tasks){
        this.name = name;
        this.tasks = tasks;
    }

    public Recruiter(String name){
        this.name = name;
        this.tasks = new ArrayList<Task>();
    }
}
