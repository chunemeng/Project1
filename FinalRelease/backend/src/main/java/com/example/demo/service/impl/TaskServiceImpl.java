package com.example.demo.service.impl;

import com.auth0.jwt.interfaces.DecodedJWT;
import com.example.demo.entity.Waiter;
import com.example.demo.entity.Worker;
import com.example.demo.repo.TaskRepository;
import com.example.demo.repo.UserRepository;
import com.example.demo.dto.QueryDto;
import com.example.demo.dto.TaskDto;
import com.example.demo.dto.TaskInfoDto;
import com.example.demo.entity.Task;
import com.example.demo.entity.User;
import com.example.demo.repo.WaiterRepository;
import com.example.demo.repo.WorkerRepository;
import com.example.demo.result.PageResult;
import com.example.demo.result.Result;
import com.example.demo.service.TaskService;
import com.example.demo.utils.BeanCopyUtil;
import com.example.demo.utils.JWTUtils;
import jakarta.servlet.http.HttpServletRequest;
import org.hibernate.Hibernate;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;


@Service
public class TaskServiceImpl implements TaskService {

    @Autowired
    TaskRepository taskRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    WaiterRepository waiterRepository;
    @Autowired
    private WorkerRepository workerRepository;

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
    public Result addTask(TaskDto taskDto, HttpServletRequest httpServletRequest) {
        Task task = new Task();
        BeanUtils.copyProperties(taskDto, task);
        String token = httpServletRequest.getHeader("authorization");
        DecodedJWT verify = JWTUtils.verify(token);
        task.setCreateDate(new Timestamp(System.currentTimeMillis()));
        task.setUpdateDate(new Timestamp(System.currentTimeMillis()));
        if (verify == null) {
            return Result.error("JWT令牌验证失败");
        }
        String id = (verify.getClaim("id").asString());
        task.setUserId(Long.valueOf(id));
        task.setStatus(false);
        taskRepository.save(task);
        return Result.success("添加成功", null);
    }

    @Override
    public PageResult getTasks(QueryDto queryDto) {
        Page<Task> page;
        if (queryDto.getKeyword().isEmpty()) {
            if (queryDto.getCategory() != null) {
                page = taskRepository.findAllByStatusAndCategory(queryDto.getStatus(), queryDto.getCategory(), PageRequest.of(queryDto.getPageIndex(), queryDto.getPageSize()));
            } else {
                page = taskRepository.findAllByStatus(queryDto.getStatus(), PageRequest.of(queryDto.getPageIndex(), queryDto.getPageSize()));
            }
        } else {
            Task task = new Task();
            task.setTitle(queryDto.getKeyword());
            if (queryDto.getCategory() != null) {
                task.setCategory(queryDto.getCategory());
            }
            task.setStatus(queryDto.getStatus());
            ExampleMatcher matching = ExampleMatcher.matching();
            matching = matching.withMatcher("title", ExampleMatcher.GenericPropertyMatchers.contains());

            Example<Task> example = Example.of(task, matching);
            page = taskRepository.findAll(example, PageRequest.of(queryDto.getPageIndex(), queryDto.getPageSize()));
        }
        List<TaskDto> taskDtoList = BeanCopyUtil.copyListProperties(page.getContent(), TaskDto::new);
        return new PageResult(page.getTotalPages(), taskDtoList);
    }

    @Override
    public Result orderTask(Long id, HttpServletRequest httpServletRequest) {
        Task task = taskRepository.findById(id).orElse(null);
        if (task == null) {
            throw new RuntimeException("不存在的任务");
        }
        String token = httpServletRequest.getHeader("authorization");
        if (token == null) {
            throw new RuntimeException("请先登录");
        }
        DecodedJWT verify = JWTUtils.verify(token);
        String userId = null;
        if (verify != null) {
            userId = (verify.getClaim("id")).asString();
        }
        if (userId == null || userId.isEmpty()) {
            throw new RuntimeException("请先登录");
        }

        Long uuserId = Long.valueOf(userId);
        User user = userRepository.findById(uuserId).orElse(null);
        if (user == null) {
            throw new RuntimeException("当前用户不存在");
        }
        if (user.getWorkId() == null) {
            throw new RuntimeException("请先成为众包者");
        }
        if (task.getUserId().equals(uuserId)) {
            throw new RuntimeException("不能接取自己发布的任务");
        }
        Waiter waiter1 = new Waiter();
        waiter1.setTaskId(id);
        waiter1.setWorkerId(user.getWorkId());
        waiterRepository.save(waiter1);

        return Result.success("成功接单", null);
    }

    @Override
    public TaskInfoDto getTasksById(Long id) {
        if (id == null) {
            throw new RuntimeException("查找任务不能为空");
        }
        Task task = taskRepository.findById(id).orElse(null);
        if (task == null) {
            throw new RuntimeException("当前任务不存在");
        }
        User user = userRepository.findById(task.getUserId()).orElse(null);
        if (user == null) {
            throw new RuntimeException("错误的任务信息");
        }
        TaskInfoDto taskDto = new TaskInfoDto();
        if (!task.getStatus()) {
            Hibernate.initialize(task.getWaiter());
        } else {
            taskDto.setWorker(workerRepository.findById(task.getWorkerId()).orElse(null));
        }

        BeanUtils.copyProperties(task, taskDto);
        if (task.getStatus()) {
            taskDto.setWaiter(null);
        } else {
            taskDto.setWorker(null);
        }
        taskDto.setUserCover(user.getCover());
        taskDto.setUserName(user.getUsername());
        return taskDto;
    }

    @Override
    public Result setWorkers(Long id, Long workerId) {
        if (id == null || workerId == null) {
            throw new RuntimeException("任务不能为空");
        }
        Task task = taskRepository.findById(id).orElse(null);
        if (task == null) {
            throw new RuntimeException("当前任务不存在");
        }
        task.setStatus(true);
        task.setWorkerId(workerId);
        taskRepository.save(task);
        return Result.success("添加成功", null);
    }

    @Override
    public PageResult getTasksByWorkerId(QueryDto queryDto, HttpServletRequest httpServletRequest) {
        Page<Task> page;
        if (queryDto.getPageIndex() == null || queryDto.getPageSize() == null) {
            throw new RuntimeException("错误的查询参数");
        }
        String token = httpServletRequest.getHeader("authorization");
        if (token == null) {
            throw new RuntimeException("请先登录");
        }
        DecodedJWT verify = JWTUtils.verify(token);
        String userId = null;
        if (verify != null) {
            userId = (verify.getClaim("id")).asString();
        }
        if (userId == null || userId.isEmpty()) {
            throw new RuntimeException("请先登录");
        }
        Long id = Long.valueOf(userId);
        User user = userRepository.findById(id).orElse(null);
        if (user == null) {
            throw new RuntimeException("当前用户不存在");
        }
        if (user.getWorkId() == null) {
            return new PageResult(0, new ArrayList<>());
        }

        page = taskRepository.findAllByWorkerId(user.getWorkId(), PageRequest.of(queryDto.getPageIndex(), queryDto.getPageSize()));
        return new PageResult(page.getTotalPages(), BeanCopyUtil.copyListProperties(page.getContent(), TaskDto::new));
    }

    @Override
    public PageResult getTasksByUserId_impl(QueryDto queryDto, HttpServletRequest httpServletRequest) {
        Page<Task> page;
        if (queryDto.getPageIndex() == null || queryDto.getPageSize() == null) {
            throw new RuntimeException("错误的查询参数");
        }
        String token = httpServletRequest.getHeader("authorization");
        if (token == null) {
            throw new RuntimeException("请先登录");
        }
        DecodedJWT verify = JWTUtils.verify(token);
        String userId = null;
        if (verify != null) {
            userId = (verify.getClaim("id")).asString();
        }
        if (userId == null || userId.isEmpty()) {
            throw new RuntimeException("请先登录");
        }
        Long id = Long.valueOf(userId);

        User user = userRepository.findById(id).orElse(null);
        if (user == null) {
            throw new RuntimeException("当前用户不存在");
        }

        page = taskRepository.findAllByUserId(id, PageRequest.of(queryDto.getPageIndex(), queryDto.getPageSize()));
        return new PageResult(page.getTotalPages(), BeanCopyUtil.copyListProperties(page.getContent(), TaskDto::new));
    }
}
