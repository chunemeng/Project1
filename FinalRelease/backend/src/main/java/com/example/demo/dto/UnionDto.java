package com.example.demo.dto;

import com.example.demo.entity.Worker;
import com.example.demo.utils.BeanCopyUtil;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Data
public class UnionDto {
    Long id;
    String name;
    String description;
    Boolean status;
    Long userId;
    String cover;
    Timestamp createDate;
    Timestamp updateDate;

    List<UserDto> users;

    public UnionDto(Worker worker) {
        this.id = worker.getId();
        this.name = worker.getName();
        this.description = worker.getDescription();
        this.status = worker.getStatus();
        this.userId = worker.getUserId();
        this.cover = worker.getCover();
        this.createDate = worker.getCreateDate();
        this.updateDate = worker.getUpdateDate();
        users = new ArrayList<>();
        users = BeanCopyUtil.copyListProperties(worker.getUsers(),UserDto::new);
    }
}
