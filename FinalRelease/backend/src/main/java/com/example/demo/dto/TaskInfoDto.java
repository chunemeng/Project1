package com.example.demo.dto;

import com.example.demo.entity.Worker;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import org.hibernate.resource.beans.internal.BeansMessageLogger_$logger;

import java.sql.Timestamp;
import java.util.Set;

@Data
@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
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
    Set<Worker> waiter;
    Worker worker;
}
