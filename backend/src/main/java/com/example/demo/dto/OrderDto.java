package com.example.demo.dto;

import com.example.demo.entity.Order;
import lombok.Value;

import java.io.Serializable;
import java.sql.Timestamp;
import java.time.Instant;

@Value
public class OrderDto implements Serializable {
    Long id;
    Long workerId;
    Long taskId;
    Instant endDate;
    Boolean status;
    Long userId;
    Timestamp createTime;
    Timestamp endTime;

    public OrderDto(Order order) {
        this.id = order.getId();
        this.workerId = order.getWorkerId();
        this.taskId = order.getTaskId();
        this.endDate = order.getEndDate();
        this.status = order.getStatus();
        this.userId = order.getUserId();
        this.createTime = order.getCreateTime();
        this.endTime = order.getEndTime();
    }
}
