package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.Data;

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

    // 与公会形成多对一映射关系
//    @ManyToOne
//    @JoinColumn(name = "union_id")
//    private Union union;
//
//    // 与个人任务形成一对多映射关系
//    @OneToMany(fetch = FetchType.LAZY, mappedBy = "worker_id", cascade = CascadeType.ALL)
//    private List<Task> personalTasks;

//    public Worker(){
//        this.personalTasks = new ArrayList<Task>();
//    }
//
//    public Worker(String name,String description,
//                  Union union,List<Task> personalTasks){
//        this.name = name;
//        this.description = description;
//        this.union = union;
//        this.personalTasks = personalTasks;
//    }
//
//    public Worker(String name,String description){
//        this.name = name;
//        this.description = description;
//        this.union = null;
//        this.personalTasks = new ArrayList<Task>();
//    }
}
