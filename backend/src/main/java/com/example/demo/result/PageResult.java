package com.example.demo.result;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Objects;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class PageResult {
    private long total;
    private List items;
}