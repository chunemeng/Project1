package com.example.demo.controller;

import com.example.demo.dto.IdDto;
import com.example.demo.dto.QueryDto;
import com.example.demo.dto.TaskDto;
import com.example.demo.dto.TaskInfoDto;
import com.example.demo.result.PageResult;
import com.example.demo.result.Result;
import com.example.demo.service.TaskService;
import jakarta.persistence.Id;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/task")
public class TaskController {
    @Autowired
    TaskService taskService;

    @PutMapping("/update")
    Result updateTask(@RequestBody TaskDto taskDto) {
        if (taskDto == null) {
            return Result.error("网络错误");
        }
        return taskService.updateTask(taskDto);
    }

    @PostMapping("/add")
    Result addTask(@RequestBody TaskDto taskDto, HttpServletRequest httpServletRequest) {
        if (taskDto == null) {
            return Result.error("网络错误");
        }
        return taskService.addTask(taskDto, httpServletRequest);
    }

    @GetMapping("/get")
    PageResult getTasks(QueryDto queryDto) {
        return taskService.getTasks(queryDto);
    }

    @GetMapping("/{id}")
    TaskInfoDto getTasksById(@PathVariable("id") Long id) {
        return taskService.getTasksById(id);
    }

    @GetMapping("/mine")
    PageResult getTasksByUserId(QueryDto queryDto, HttpServletRequest httpServletRequest) {
        return taskService.getTasksByUserId(queryDto, httpServletRequest);
    }

    @PostMapping("/order")
    Result orderTask(@RequestBody Long id, HttpServletRequest httpServletRequest) {
        return taskService.orderTask(id, httpServletRequest);
    }

    @GetMapping("/worker")
    PageResult getTasksByWorkerId(QueryDto queryDto, HttpServletRequest httpServletRequest) {
        return taskService.getTasksByWorkerId(queryDto, httpServletRequest);
    }
}
