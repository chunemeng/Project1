package com.example.demo.controller;

import com.example.demo.dto.LoginDto;
import com.example.demo.dto.UserDto;
import com.example.demo.result.Result;
import com.example.demo.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
        if(h == null){
            return Result.error("未提供登录令牌");
        }

        UserDto userDto = userService.getMe(httpServletRequest);
        if(userDto != null){
            return Result.success(userDto);
        }
        return Result.error("用户不存在");
    }

    @PostMapping("/register")
    Result register(@RequestBody LoginDto loginDto) {
        if(loginDto == null){
            return Result.error("网络错误");
        }
        return userService.register(loginDto);
    }

    @PutMapping("/password")
    Result changePassword(@RequestBody LoginDto loginDto) {
        if(loginDto == null){
            return Result.error("网络错误");
        }
        return userService.changePassword(loginDto);
    }

    @PostMapping("/logout")
    Result logout(HttpServletRequest httpServletRequest) {
        return userService.logout(httpServletRequest);
    }
}
