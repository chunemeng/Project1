package com.example.demo.controller;

import com.example.demo.dto.LoginDto;
import com.example.demo.result.Result;
import com.example.demo.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    UserService userService;

    @PostMapping("/login")
    Result login(@RequestBody LoginDto loginDTO, HttpServletResponse httpServletResponse) {
        if (loginDTO == null) {
            return Result.error("网络错误");
        }
        return userService.login(loginDTO, httpServletResponse);
    }

    @PostMapping("/me")
    Result getMe(@RequestBody LoginDto loginDTO, HttpServletRequest httpServletRequest) {
        if (loginDTO == null) {
            return Result.error("网络错误");
        }

        String h = httpServletRequest.getHeader("USER_LOGIN_TOKEN");

        return null;
    }

}
