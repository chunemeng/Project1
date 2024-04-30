package com.example.demo.dto;

import lombok.Data;

@Data
public class QueryDto {
    Integer pageIndex;
    Integer pageSize;
    String keyword;
    Boolean status;
}
