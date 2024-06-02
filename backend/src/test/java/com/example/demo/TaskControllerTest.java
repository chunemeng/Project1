package com.example.demo;

import com.example.demo.controller.TaskController;
import com.example.demo.dto.TaskDto;
import com.example.demo.dto.TaskInfoDto;
import com.example.demo.result.PageResult;
import com.example.demo.result.Result;
import com.example.demo.service.impl.TaskServiceImpl;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.jayway.jsonpath.JsonPath;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.nio.charset.StandardCharsets;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doReturn;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import static org.hamcrest.MatcherAssert.*;


@SpringBootTest
@AutoConfigureMockMvc
public class TaskControllerTest {
    private static final String AUTHORIZATION = "Authorization";

    private MockMvc mvc;

    @Mock
    private TaskServiceImpl serviceImpl;

    @InjectMocks
    @Autowired
    private TaskController controller;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.openMocks(this);
        mvc = MockMvcBuilders.standaloneSetup(controller).build();
    }

    @Test
    public void testGetTasksById() throws Exception {
        TaskInfoDto task = new TaskInfoDto();
        task.setCategory((short) 0);
        task.setDuration(new Timestamp(1));
        task.setDescription("description");
        task.setMoney(1L);
        task.setId(1L);
        task.setUserName("test");
        task.setUserCover("test");
        task.setUpdateDate(new Timestamp(System.currentTimeMillis()));
        task.setCreateDate(new Timestamp(System.currentTimeMillis()));
        task.setTitle("test");
        doReturn(task).when(serviceImpl).getTasksById(any());

        MvcResult mvcResult = this.mvc.perform(get("/task/1")
                        .contentType(MediaType.APPLICATION_FORM_URLENCODED))
                .andExpect(status().isOk())
                .andReturn();
        String content = mvcResult.getResponse().getContentAsString(StandardCharsets.UTF_8);
        System.out.println(content);

        int id = (JsonPath.parse(content).read("$.id"));

        Long task_id = (long) id;
        System.out.println(task_id);
        assertThat(task_id, equalTo(task.getId()));
    }

    @Test
    public void testGetTasks() throws Exception {
        PageResult pageResult = new PageResult();
        pageResult.setTotal(6);
        List<TaskDto> list = new ArrayList<>();
        list.add(new TaskDto());
        pageResult.setItems(list);
        doReturn(pageResult).when(serviceImpl).getTasks(any());

        MvcResult mvcResult = this.mvc.perform(get("/task/get?keyword=&pageIndex=0&pageSize=6&category=&status=false")
                        .contentType(MediaType.APPLICATION_FORM_URLENCODED))
                .andExpect(status().isOk())
                .andReturn();
        String content = mvcResult.getResponse().getContentAsString(StandardCharsets.UTF_8);
        System.out.println(content);

        int total = (JsonPath.parse(content).read("$.total"));

        Long task_id = (long) total;
        assertThat(task_id, equalTo(pageResult.getTotal()));
    }

    @Test
    public void testAddTaskTest() throws Exception {
        Result r = Result.success("添加成功", null);
        doReturn(r).when(serviceImpl).addTask(any(), any());

        TaskDto taskDto = new TaskDto();
        taskDto.setTitle("Write Code");
        taskDto.setWorkerId(1L);
        taskDto.setId(1L);

        ObjectMapper objectMapper = new ObjectMapper();
        String contentf = objectMapper.writeValueAsString(taskDto);

        MvcResult mvcResult = this.mvc.perform(post("/task/add")
                        .header(AUTHORIZATION, "123")
                        .content(contentf)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andReturn();
        String content = mvcResult.getResponse().getContentAsString(StandardCharsets.UTF_8);
        System.out.println(content);

        Boolean ok = (JsonPath.parse(content).read("$.ok"));

        assertThat(ok, equalTo(true));
    }

    @Test
    public void testWorkerTask() throws Exception {
        PageResult pageResult = new PageResult();
        pageResult.setTotal(6);
        List<TaskDto> list = new ArrayList<>();
        list.add(new TaskDto());
        pageResult.setItems(list);
        doReturn(pageResult).when(serviceImpl).getTasksByWorkerId(any(), any());

        MvcResult mvcResult = this.mvc.perform(get("/task/worker?keyword=&pageIndex=0&pageSize=6&category=&status=false")
                        .contentType(MediaType.APPLICATION_FORM_URLENCODED))
                .andExpect(status().isOk())
                .andReturn();
        String content = mvcResult.getResponse().getContentAsString(StandardCharsets.UTF_8);
        System.out.println(content);

        int total = (JsonPath.parse(content).read("$.total"));

        Long task_id = (long) total;
        assertThat(task_id, equalTo(pageResult.getTotal()));
    }

    @Test
    public void testMineTask() throws Exception {
        PageResult pageResult = new PageResult();
        pageResult.setTotal(6);
        List<TaskDto> list = new ArrayList<>();
        list.add(new TaskDto());
        pageResult.setItems(list);
        doReturn(pageResult).when(serviceImpl).getTasksByUserId_impl(any(), any());

        MvcResult mvcResult = this.mvc.perform(get("/task/mine?keyword=&pageIndex=0&pageSize=6&category=&status=false")
                        .contentType(MediaType.APPLICATION_FORM_URLENCODED))
                .andExpect(status().isOk())
                .andReturn();
        String content = mvcResult.getResponse().getContentAsString(StandardCharsets.UTF_8);
        System.out.println(content);

        int total = (JsonPath.parse(content).read("$.total"));

        Long task_id = (long) total;
        assertThat(task_id, equalTo(pageResult.getTotal()));
    }

}
