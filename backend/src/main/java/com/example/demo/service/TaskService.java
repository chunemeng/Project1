package com.example.demo.service;

import com.example.demo.dto.QueryDto;
import com.example.demo.dto.TaskDto;
import com.example.demo.result.PageResult;
import com.example.demo.result.Result;
import org.springframework.data.domain.Page;

public interface TaskService {



    public Result updateTask(TaskDto taskDto);

    public Result addTask(TaskDto taskDto);
    public PageResult getTasks(QueryDto queryDto);
}
