package com.example.demo;

import com.auth0.jwt.interfaces.Claim;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.example.demo.repo.TaskRepository;
import com.example.demo.repo.UserRepository;
import com.example.demo.dto.QueryDto;
import com.example.demo.dto.TaskDto;
import com.example.demo.entity.Task;
import com.example.demo.entity.User;
import com.example.demo.service.impl.TaskServiceImpl;
import com.example.demo.utils.JWTUtils;
import jakarta.servlet.http.HttpServletRequest;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.*;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.*;

import java.util.*;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@SpringBootTest
public class TaskServiceTest {

    @Mock
    TaskRepository taskRepository;

    @Mock
    UserRepository userRepository;

    @Mock
    private HttpServletRequest request;

    @Mock
    private DecodedJWT decodedJWT;

    @Mock
    private Claim claim;

    @InjectMocks
    private TaskServiceImpl service;

    @BeforeAll
    public static void init() {
        // 此处如果不测试JWTUtils，测试内使用结果会覆盖UtilsTest中的测试
        // 此处不测试会覆盖UtilsTest的测试
        if (!Mockito.mockingDetails(JWTUtils.class).isMock()) {
            Map<String, String> map = new HashMap<>();
            map.put("username", "admin");
            String s = JWTUtils.createToken(map);
            JWTUtils.getExpireTime();
            JWTUtils.verify("token");
            JWTUtils.verify(s);
            mockStatic(JWTUtils.class);
        }
    }

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testUpdateTask() {
        TaskDto taskDto = new TaskDto();
        taskDto.setId(null);
        assertThrows(RuntimeException.class, () -> service.updateTask(taskDto));

        taskDto.setId(1L);
        service.updateTask(taskDto);
    }

    @Test
    void testAddTask() {
        TaskDto taskDto = new TaskDto();
        when(JWTUtils.verify(any())).thenReturn(null);
        service.addTask(taskDto,request);

        when(JWTUtils.verify(any())).thenReturn(decodedJWT);
        doReturn(claim).when(decodedJWT).getClaim(any());
        doReturn("123").when(claim).asString();
        service.addTask(taskDto,request);
    }

    @Test
    void testGetTasks() {
        QueryDto queryDto = new QueryDto();
        queryDto.setStatus(true);
        queryDto.setPageSize(1);
        queryDto.setPageIndex(1);
        List<Task> tasks = new ArrayList<>();
        tasks.add(new Task());
        Page<Task> page = new PageImpl<>(tasks, PageRequest.of(queryDto.getPageIndex(), queryDto.getPageSize()),1);

        doReturn(page).when(taskRepository).findAllByStatus(any(),any());
        queryDto.setCategory(null);
        queryDto.setKeyword("");
        service.getTasks(queryDto);

        doReturn(page).when(taskRepository).findAllByStatusAndCategory(any(),any(),any());
        queryDto.setCategory((short) 1);
        service.getTasks(queryDto);

        doReturn(page).when(taskRepository).findAll(any(Example.class), any(Pageable.class));
        queryDto.setKeyword("123");
        service.getTasks(queryDto);

        queryDto.setCategory(null);
        service.getTasks(queryDto);
    }

    @Test
    void testOrderTask() {
        Long id = 1L;
        Optional<Task> task = Optional.empty();
        doReturn(task).when(taskRepository).findById(any());
        assertThrows(RuntimeException.class, () -> service.orderTask(id,request));

        task = Optional.of(new Task());
        doReturn(task).when(taskRepository).findById(any());
        doReturn(null).when(request).getHeader(any());
        assertThrows(RuntimeException.class, () -> service.orderTask(id,request));

        doReturn("").when(request).getHeader(any());
        when(JWTUtils.verify(any())).thenReturn(decodedJWT);
        doReturn(claim).when(decodedJWT).getClaim(any());
        doReturn(null).when(claim).asString();
        assertThrows(RuntimeException.class, () -> service.orderTask(id,request));

        doReturn("123").when(claim).asString();
        Optional<User> user = Optional.empty();
        doReturn(user).when(userRepository).findById(any());
        assertThrows(RuntimeException.class, () -> service.orderTask(id,request));

        user = Optional.of(new User());
        doReturn(user).when(userRepository).findById(any());
        user.get().setId(123L);
        assertThrows(RuntimeException.class, () -> service.orderTask(id,request));

        user.get().setId(12L);
        service.orderTask(id,request);

    }

    @Test
    void testGetTasksById() {
        assertThrows(RuntimeException.class, () -> service.getTasksById(null));

        Long id = 1L;
        Optional<Task> task = Optional.empty();
        doReturn(task).when(taskRepository).findById(any());
        assertThrows(RuntimeException.class, () -> service.getTasksById(id));

        task = Optional.of(new Task());
        doReturn(task).when(taskRepository).findById(any());
        Optional<User> user = Optional.empty();
        doReturn(user).when(userRepository).findById(any());
        assertThrows(RuntimeException.class, () -> service.getTasksById(id));

        user = Optional.of(new User());
        doReturn(user).when(userRepository).findById(any());
        service.getTasksById(id);
    }

    @Test
    void testGetTasksByWorkerId() {
        QueryDto queryDto = new QueryDto();
        queryDto.setPageIndex(1);
        queryDto.setPageSize(null);
        assertThrows(RuntimeException.class, () -> service.getTasksByWorkerId(queryDto,request));

        queryDto.setPageSize(1);
        doReturn(null).when(request).getHeader(any());
        assertThrows(RuntimeException.class, () -> service.getTasksByWorkerId(queryDto,request));

        doReturn("").when(request).getHeader(any());
        when(JWTUtils.verify(any())).thenReturn(decodedJWT);
        doReturn(claim).when(decodedJWT).getClaim(any());
        doReturn("").when(claim).asString();
        assertThrows(RuntimeException.class, () -> service.getTasksByWorkerId(queryDto,request));

        doReturn("123").when(claim).asString();
        Optional<User> user = Optional.empty();
        doReturn(user).when(userRepository).findById(any());
        assertThrows(RuntimeException.class, () -> service.getTasksByWorkerId(queryDto,request));

        user = Optional.of(new User());
        doReturn(user).when(userRepository).findById(any());
        List<Task> tasks = new ArrayList<>();
        tasks.add(new Task());
        Page<Task> page = new PageImpl<>(tasks, PageRequest.of(queryDto.getPageIndex(), queryDto.getPageSize()),1);
        doReturn(page).when(taskRepository).findAllByWorkerId(any(),any());
        service.getTasksByWorkerId(queryDto,request);
    }

    @Test
    void testGetTasksByUserId_impl() {
        QueryDto queryDto = new QueryDto();
        queryDto.setPageIndex(1);
        queryDto.setPageSize(null);
        assertThrows(RuntimeException.class, () -> service.getTasksByUserId_impl(queryDto,request));

        queryDto.setPageSize(1);
        doReturn(null).when(request).getHeader(any());
        assertThrows(RuntimeException.class, () -> service.getTasksByUserId_impl(queryDto,request));

        doReturn("").when(request).getHeader(any());
        when(JWTUtils.verify(any())).thenReturn(decodedJWT);
        doReturn(claim).when(decodedJWT).getClaim(any());
        doReturn("").when(claim).asString();
        assertThrows(RuntimeException.class, () -> service.getTasksByUserId_impl(queryDto,request));

        doReturn("123").when(claim).asString();
        Optional<User> user = Optional.empty();
        doReturn(user).when(userRepository).findById(any());
        assertThrows(RuntimeException.class, () -> service.getTasksByUserId_impl(queryDto,request));

        user = Optional.of(new User());
        doReturn(user).when(userRepository).findById(any());
        List<Task> tasks = new ArrayList<>();
        tasks.add(new Task());
        Page<Task> page = new PageImpl<>(tasks, PageRequest.of(queryDto.getPageIndex(), queryDto.getPageSize()),1);
        doReturn(page).when(taskRepository).findAllByUserId(any(),any());
        service.getTasksByUserId_impl(queryDto,request);
    }

    @Test
    void testSetWorkers() {
        Long id = 1L;
        assertThrows(RuntimeException.class, () -> service.setWorkers(id,null));

        Long workerId = 1L;
        Optional<Task> task = Optional.empty();
        doReturn(task).when(taskRepository).findById(any());
        assertThrows(RuntimeException.class, ()->service.setWorkers(id,workerId));

        task = Optional.of(new Task());
        doReturn(task).when(taskRepository).findById(any());
        service.setWorkers(id,workerId);
    }

}
