package com.example.demo.dto;

import lombok.Data;

@Data
public class QueryDto {
    String keyword;
    Integer pageIndex;
    Integer pageSize;
    Short category;
    Boolean status;
}
