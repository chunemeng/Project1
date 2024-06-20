package com.example.demo.dto;

import com.example.demo.entity.Task;
import com.example.demo.entity.Worker;
import lombok.Data;
import lombok.Value;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.List;

/**
 * DTO for {@link com.example.demo.entity.Task}
 */
@Data
public class TaskDto implements Serializable {
    Long id;
    String title;
    Long userId;
    Long workerId;
    Long money;
    Short category;
    Boolean status;
    String description;
    Timestamp createDate;
    Timestamp updateDate;
    private Timestamp duration;
    List<WorkerDto> workerList;
}