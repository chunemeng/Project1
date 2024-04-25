package com.example.demo.entity;

import ch.qos.logback.core.read.ListAppender;
import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

// 任务清单实体类，单例模式
// 管理当前平台的所有任务
@Data
public class TaskList {
    private static TaskList instance = null;

    private List<Task> tasksList;

    private TaskList(){
        tasksList = new ArrayList<Task>();
    }

    public static synchronized TaskList getInstance(){
        if(instance == null){
            instance = new TaskList();
        }
        return instance;
    }
}
