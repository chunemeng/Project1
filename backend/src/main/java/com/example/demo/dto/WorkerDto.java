package com.example.demo.dto;

import com.example.demo.entity.Worker;
import lombok.Value;

import javax.swing.text.StyledEditorKit;
import java.io.Serializable;
import java.sql.Timestamp;

@Value
public class WorkerDto implements Serializable {
    Long id;
    String name;
    String description;
    Boolean status;
    Long unionId;
    Long userId;
    String nickname;
    String cover;
    Timestamp createDate;
    Timestamp updateDate;

    public WorkerDto(Worker worker) {
        this.id = worker.getId();
        this.name = worker.getName();
        this.description = worker.getDescription();;
        this.status = worker.getStatus();
        this.unionId = worker.getUnionId();
        this.userId = worker.getUserId();;
        this.nickname = worker.getNickname();
        this.cover = worker.getCover();
        this.createDate = worker.getCreateDate();
        this.updateDate = worker.getUpdateDate();
    }
}
