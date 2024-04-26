package com.example.demo.service;


import com.example.demo.dto.LoginDTO;
import com.example.demo.dto.UserDto;
import com.example.demo.result.Result;
import jakarta.servlet.http.HttpServletResponse;

public interface UserService {
    Result login(LoginDTO loginDTO, HttpServletResponse httpServletResponse);
    UserDto getMe(String username);
}
