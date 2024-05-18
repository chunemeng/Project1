package com.example.demo.controller;

import com.example.demo.dto.LoginDto;
import com.example.demo.dto.UserDto;
import com.example.demo.result.Result;
import com.example.demo.service.UserService;
import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @Resource
    private RedisTemplate<String, Object> redisTemplate;

    @PostMapping("/login")
    Result login(@RequestBody LoginDto loginDTO, HttpServletResponse httpServletResponse) {
        if (loginDTO == null) {
            return Result.error("网络错误");
        }
        return userService.login(loginDTO, httpServletResponse);
    }

    @GetMapping("/me")
    UserDto getMe(HttpServletRequest httpServletResponse) {
        return userService.getMe(httpServletResponse);
    }

    @PostMapping("/register")
    Result register(@RequestBody LoginDto loginDto) {
        if (loginDto == null) {
            return Result.error("网络错误");
        }
        return userService.register(loginDto);
    }

    @PutMapping("/password")
    Result changePassword(@RequestBody LoginDto loginDto, HttpServletResponse httpServletResponse) {
        if (loginDto == null) {
            return Result.error("网络错误");
        }
        return userService.changePassword(loginDto, httpServletResponse);
    }

    @PutMapping("/logout")
    Result logout(HttpServletRequest httpServletRequest) {
        return userService.logout(httpServletRequest);
    }
}
