package com.example.demo.controller;

import com.example.demo.dto.QueryDto;
import com.example.demo.dto.TaskInfoDto;
import com.example.demo.dto.UnionDto;
import com.example.demo.result.PageResult;
import com.example.demo.service.WorkerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/worker")
public class WorkerController {
    @Autowired
    WorkerService workerService;


    @GetMapping("/{id}")
    UnionDto getUnionById(@PathVariable("id") Long id) {
        return workerService.getUnion(id);
    }


    @GetMapping("/get")
    PageResult getWorkers(QueryDto queryDto){return workerService.getWorkers(queryDto);}
}
