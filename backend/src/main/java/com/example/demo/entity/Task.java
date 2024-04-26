package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String taskInfo;

    private Long userId;

    private Long workerId;

    private Long recruiterId;

    private Short category;

    private Boolean status;

//    // 与公会形成多对一映射关系
//    @ManyToOne
//    @JoinColumn(name = "union_id")
//    private Union union;
//
//    // 与众包者形成多对一映射关系
//    @ManyToOne
//    @JoinColumn(name = "worker_id")
//    private Worker worker;
//
//    // 与招募者也形成多对一映射关系
//    @ManyToOne
//    @JoinColumn(name = "recruiter_id")
//    private Recruiter recruiter;

//    public Task(String taskInfo,Union union,
//                Recruiter recruiter,String name){
//        this.name = name;
//        this.taskInfo = taskInfo;
//        this.union = union;
//        this.worker = null;
//        this.recruiter = recruiter;
//    }
//
//    public Task(){
//
//    }
//
//    public Task(String taskInfo,Worker worker,
//                Recruiter recruiter,String name){
//        this.name = name;
//        this.taskInfo = taskInfo;
//        this.union = null;
//        this.worker = worker;
//        this.recruiter = recruiter;
//    }
//
//    public Task(String taskInfo, Recruiter recruiter,
//                String name){
//        this.taskInfo = taskInfo;
//        this.name = name;
//        this.recruiter = recruiter;
//    }
}
