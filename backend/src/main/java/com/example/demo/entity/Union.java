package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.DialectOverride;

import java.util.ArrayList;
import java.util.List;

// 公会实体类
@Data
@Entity
@Table(name = "union")
public class Union {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "union_id")
    private int id;

    private String name;

    private String unionInfo;

    // 指定管理员的id
    private int adminId;

    // 与公会成员形成一对多映射关系
    @OneToMany(mappedBy = "union", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Worker> members;

    // 与公会任务形成一对多映射关系
    @OneToMany(mappedBy = "union", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Task> tasks;

    public Union(String name,String unionInfo,
                 Worker admin,List<Worker> members,
                 List<Task> tasks){
        this.name = name;
        this.unionInfo = unionInfo;
        this.adminId = admin.getId();
        this.members = members;
        this.tasks = tasks;
    }

    public Union(String name,String unionInfo,
                 Worker admin){
        this.name = name;
        this.unionInfo = unionInfo;
        this.adminId = admin.getId();
        this.members = new ArrayList<Worker>();
        this.tasks = new ArrayList<Task>();
    }

    public Union() {
        this.members = new ArrayList<Worker>();
        this.tasks = new ArrayList<Task>();
    }
}
