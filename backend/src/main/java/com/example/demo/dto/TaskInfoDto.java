package com.example.demo.dto;

import lombok.Data;

import java.sql.Timestamp;

@Data
public class TaskInfoDto {
    Long id;
    String title;
    String userName;
    String userCover;
    Long money;
    Short category;
    String description;
    Timestamp createDate;
    Timestamp updateDate;
    private Timestamp duration;
}
