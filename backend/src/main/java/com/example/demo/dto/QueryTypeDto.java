package com.example.demo.dto;

import lombok.Data;

@Data
public class QueryTypeDto {
    String keyword;
    Integer pageIndex;
    Integer pageSize;
    Boolean status;
}