package com.example.demo.dto;

import com.example.demo.entity.Worker;
import lombok.Data;
import lombok.Value;

import javax.swing.text.StyledEditorKit;
import java.io.Serializable;
import java.sql.Timestamp;

@Data
public class WorkerDto implements Serializable {
    Long id;
    String name;
    String description;
    Boolean status;
    Long userId;
    String cover;
    Timestamp createDate;
    Timestamp updateDate;
}
