package com.example.demo.dto;

import lombok.Data;
import org.hibernate.resource.beans.internal.BeansMessageLogger_$logger;

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
    Boolean status;
}
