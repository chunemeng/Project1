package com.example.demo.service.impl;

import com.example.demo.dao.TaskRepository;
import com.example.demo.dto.QueryDto;
import com.example.demo.dto.TaskDto;
import com.example.demo.entity.Task;
import com.example.demo.result.PageResult;
import com.example.demo.result.Result;
import com.example.demo.service.TaskService;
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
public class TaskServiceImpl implements TaskService {

    @Autowired
    TaskRepository taskRepository;

    @Override
    public Result updateTask(TaskDto taskDto) {
        if (taskDto == null || taskDto.getId() == null) {
            throw new RuntimeException("更新未知任务");
        }
        Task task = new Task();
        BeanUtils.copyProperties(taskDto, task);
        taskRepository.save(task);
        return Result.success("更新成功", null);
    }

    @Override
    public Result addTask(TaskDto taskDto) {
        if (taskDto.getWorkerId() == null) {
            throw new RuntimeException("任务发布者不能为空");
        }
        Task task = new Task();
        BeanUtils.copyProperties(taskDto, task);
        taskRepository.save(task);
        return null;
    }

    @Override
    public PageResult getTasks(QueryDto queryDto) {
        Page<Task> page;
        if (queryDto.getStatus() == null) {
            throw new RuntimeException("网络错误，任务状态不能为空");
        }
        if (queryDto.getKeyword().isEmpty()) {
            page = taskRepository.findAllByStatus(queryDto.getStatus(), PageRequest.of(queryDto.getPageIndex(), queryDto.getPageSize()));
        } else {
            Task task = new Task();
            task.setTitle(queryDto.getKeyword());
            task.setStatus(queryDto.getStatus());
            ExampleMatcher matching = ExampleMatcher.matching();
            matching = matching.withMatcher("title", ExampleMatcher.GenericPropertyMatchers.contains());

            Example<Task> example = Example.of(task, matching);
            page = taskRepository.findAll(example, PageRequest.of(queryDto.getPageIndex(), queryDto.getPageSize()));
        }
        List<TaskDto> taskDtoList = new ArrayList<>();
        BeanUtils.copyProperties(page.getContent(), taskDtoList);
        return new PageResult(page.getTotalPages(), taskDtoList);
    }
}
