package com.example.demo.service;

import com.example.demo.dao.WorkerRepository;
import com.example.demo.dto.QueryDto;
import com.example.demo.result.PageResult;
import org.springframework.beans.factory.annotation.Autowired;

public interface WorkerService {
    public PageResult getWorkers(QueryDto queryDto);
}
