package com.example.demo.controller;

import com.example.demo.dto.QueryDto;
import com.example.demo.result.PageResult;
import com.example.demo.service.WorkerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/worker")
public class WorkerController {
    @Autowired
    WorkerService workerService;

    @GetMapping("/get")
    PageResult getWorkers(@RequestBody QueryDto queryDto){return workerService.getWorkers(queryDto);}
}
