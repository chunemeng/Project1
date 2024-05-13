package com.example.demo.service.impl;

import com.example.demo.dao.WorkerRepository;
import com.example.demo.dto.QueryDto;
import com.example.demo.dto.TaskDto;
import com.example.demo.entity.Task;
import com.example.demo.entity.Worker;
import com.example.demo.result.PageResult;
import com.example.demo.service.WorkerService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class WorkerServiceImpl implements WorkerService {
    @Autowired
    WorkerRepository workerRepository;

    @Override
    public PageResult getWorkes(QueryDto queryDto) {
        return null;
    }
}
