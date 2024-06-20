package com.example.demo;

import com.example.demo.dto.*;
import com.example.demo.entity.User;
import com.example.demo.entity.Worker;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

@SpringBootTest
public class DtoTest {
    private final ObjectMapper objectMapper = new ObjectMapper();

    @Test
    public void testAll() throws JsonProcessingException {
        LoginDto loginDto = new LoginDto();
        objectMapper.writeValueAsString(loginDto);
        WorkerDto workerDto = new WorkerDto();
        objectMapper.writeValueAsString(workerDto);
        User user = new User();
        UserDto userDto = new UserDto(user);
        objectMapper.writeValueAsString(userDto);
        IdDto idDto = new IdDto();
        objectMapper.writeValueAsString(idDto);
        QueryDto queryDto = new QueryDto();
        objectMapper.writeValueAsString(queryDto);
        OrderDto orderDto = new OrderDto();
        objectMapper.writeValueAsString(orderDto);
        TaskDto taskDto = new TaskDto();
        objectMapper.writeValueAsString(taskDto);
        TaskInfoDto taskInfoDto = new TaskInfoDto();
        objectMapper.writeValueAsString(taskInfoDto);
        QueryTypeDto queryTypeDto = new QueryTypeDto();
        objectMapper.writeValueAsString(queryTypeDto);
        userDto = new UserDto();
        Worker worker = new Worker();
        List<User> i  = new ArrayList<>();
        i.add(new User());
        worker.setUsers(i);
        UnionDto unionDto = new UnionDto();
        UnionDto UnionDto = new UnionDto(worker);
        objectMapper.writeValueAsString(unionDto);
        objectMapper.writeValueAsString(userDto);
    }
}
