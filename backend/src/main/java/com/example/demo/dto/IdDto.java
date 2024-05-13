package com.example.demo.dto;

import lombok.Data;
import org.apache.kafka.common.protocol.types.Field;

@Data
public class IdDto {
    Integer pageIndex;
    Integer pageSize;
    Long keyId;
    Boolean status;
}
