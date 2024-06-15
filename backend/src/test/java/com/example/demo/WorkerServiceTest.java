package com.example.demo;

import com.example.demo.repo.WorkerRepository;
import com.example.demo.dto.QueryDto;
import com.example.demo.entity.Worker;
import com.example.demo.service.impl.WorkerServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.*;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doReturn;

@SpringBootTest
public class WorkerServiceTest {
    @Mock
    WorkerRepository workerRepository;

    @InjectMocks
    private WorkerServiceImpl service;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetWorkers() {
        QueryDto queryDto = new QueryDto();
        queryDto.setStatus(null);
        assertThrows(RuntimeException.class, () -> service.getWorkers(queryDto));

        queryDto.setStatus(true);
        queryDto.setKeyword("");
        queryDto.setPageSize(1);
        queryDto.setPageIndex(1);
        List<Worker> workers = new ArrayList<>();
        workers.add(new Worker());
        Page<Worker> page = new PageImpl<>(workers, PageRequest.of(queryDto.getPageIndex(), queryDto.getPageSize()),1);
        doReturn(page).when(workerRepository).findAllByStatus(any(),any());
        service.getWorkers(queryDto);

        queryDto.setKeyword("123");
        doReturn(page).when(workerRepository).findAll(any(Example.class), any(Pageable.class));
        service.getWorkers(queryDto);

    }
}