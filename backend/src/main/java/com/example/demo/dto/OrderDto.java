package com.example.demo.dto;

import lombok.Data;
import lombok.Value;

import java.io.Serializable;
import java.sql.Timestamp;
import java.time.Instant;

@Data
public class OrderDto implements Serializable {
    Long id;
    Long workerId;
    Long taskId;
    Timestamp endDate;
    Boolean status;
    Long userId;
    Timestamp createTime;
    Timestamp endTime;
}
