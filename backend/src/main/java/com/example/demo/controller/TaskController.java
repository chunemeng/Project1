package com.example.demo.controller;

import com.example.demo.dto.IdDto;
import com.example.demo.dto.QueryDto;
import com.example.demo.dto.TaskDto;
import com.example.demo.result.PageResult;
import com.example.demo.result.Result;
import com.example.demo.service.TaskService;
import jakarta.persistence.Id;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/task")
public class TaskController {
    @Autowired
    TaskService taskService;

    @PutMapping("/update")
    Result updateTask(@RequestBody TaskDto taskDto) {
        if(taskDto == null) {
            return Result.error("网络错误");
        }
        return taskService.updateTask(taskDto);
    }

    @PostMapping("/add")
    Result addTask(@RequestBody TaskDto taskDto) {
        if(taskDto == null) {
            return Result.error("网络错误");
        }
        return taskService.addTask(taskDto);
    }

    @GetMapping("/get")
    PageResult getTasks(@RequestBody QueryDto queryDto) {
        return taskService.getTasks(queryDto);
    }

    @GetMapping("/get/worker")
    PageResult getTasksByWorker(@RequestBody IdDto idDto) { return taskService.getTasksByWorkerId(idDto);}

    @GetMapping("/get/union")
    PageResult getTasksByUnion(@RequestBody IdDto idDto) { return taskService.getTasksByUnionId(idDto);}

    @GetMapping("/get/recruiter")
    PageResult getTasksByRecruiter(@RequestBody IdDto idDto) { return taskService.getTasksByRecruiterId(idDto);}
}
