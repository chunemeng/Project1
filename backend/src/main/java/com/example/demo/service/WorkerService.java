package com.example.demo.service;

import com.example.demo.dto.QueryDto;
import com.example.demo.result.PageResult;

public interface WorkerService {
    public PageResult getWorkers(QueryDto queryDto);
}
