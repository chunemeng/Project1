package com.example.demo.service;

import com.example.demo.dto.IdDto;
import com.example.demo.dto.QueryDto;
import com.example.demo.dto.TaskDto;
import com.example.demo.dto.TaskInfoDto;
import com.example.demo.result.PageResult;
import com.example.demo.result.Result;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.data.domain.Page;

import java.net.http.HttpRequest;

public interface TaskService {



    public Result updateTask(TaskDto taskDto);

    public Result addTask(TaskDto taskDto, HttpServletRequest httpServletRequest);
    public PageResult getTasks(QueryDto queryDto);

    public Result orderTask(Long id, HttpServletRequest httpServletRequest);

    public TaskInfoDto getTasksById(Long id);

    public PageResult getTasksByWorkerId(QueryDto queryDto, HttpServletRequest httpServletReques);

    PageResult getTasksByUserId_impl(QueryDto queryDto, HttpServletRequest httpServletRequest);
}
