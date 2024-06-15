package com.example.demo.service.impl;

import com.example.demo.repo.WorkerRepository;
import com.example.demo.dto.QueryDto;
import com.example.demo.dto.WorkerDto;
import com.example.demo.entity.Worker;
import com.example.demo.result.PageResult;
import com.example.demo.service.WorkerService;
import com.example.demo.utils.BeanCopyUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WorkerServiceImpl implements WorkerService {
    @Autowired
    WorkerRepository workerRepository;

    @Override
    public PageResult getWorkers(QueryDto queryDto) {
        Page<Worker> page;
        if(queryDto.getStatus() == null) {
            throw new RuntimeException("网络错误，众包者状态不能为空");
        }
        if(queryDto.getKeyword().isEmpty()) {
            page = workerRepository.findAllByStatus(queryDto.getStatus(),PageRequest.of(queryDto.getPageIndex(), queryDto.getPageSize()));
        } else {
            Worker worker = new Worker();
            worker.setStatus(queryDto.getStatus());

            ExampleMatcher matching = ExampleMatcher.matching();
            matching = matching.withMatcher("title", ExampleMatcher.GenericPropertyMatchers.contains());

            Example<Worker> example = Example.of(worker, matching);
            page = workerRepository.findAll(example, PageRequest.of(queryDto.getPageIndex(), queryDto.getPageSize()));
        }
        List<WorkerDto> workerDtoList = BeanCopyUtil.copyListProperties(page.getContent(),WorkerDto::new);
        return new PageResult(page.getTotalPages(), workerDtoList);

    }
}
