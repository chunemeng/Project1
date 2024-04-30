package com.example.demo.dto;

import com.example.demo.entity.Task;
import lombok.Value;

import java.io.Serializable;
import java.sql.Timestamp;

/**
 * DTO for {@link com.example.demo.entity.Task}
 */
@Value
public class TaskDto implements Serializable {
    Long id;
    String title;
    Long userId;
    Long workerId;
    Long recruiterId;
    Short category;
    Boolean status;
    String description;
    Timestamp createDate;
    Timestamp updateDate;
    Timestamp duration;

    public TaskDto(Task task) {
        this.id = task.getId();
        this.title = task.getTitle();
        this.userId = task.getUserId();
        this.workerId = task.getWorkerId();
        this.recruiterId = task.getRecruiterId();
        this.category = task.getCategory();
        this.status = task.getStatus();
        this.description = task.getDescription();
        this.createDate = task.getCreateDate();
        this.updateDate = task.getUpdateDate();
        this.duration = task.getDuration();
    }
}