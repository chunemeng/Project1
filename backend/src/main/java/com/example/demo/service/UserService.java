package com.example.demo.service;


import com.example.demo.dto.LoginDto;
import com.example.demo.dto.UserDto;
import com.example.demo.result.Result;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public interface UserService {
    Result logout(HttpServletRequest httpServletRequest);

    Result login(LoginDto loginDTO, HttpServletResponse httpServletResponse);

    UserDto getMe(HttpServletRequest httpServletRequest);

    Result register(LoginDto loginDTO);

    Result changePassword(LoginDto loginDTO);
}
