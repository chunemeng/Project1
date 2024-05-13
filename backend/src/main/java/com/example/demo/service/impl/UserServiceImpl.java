package com.example.demo.service.impl;

import com.auth0.jwt.interfaces.DecodedJWT;
import com.example.demo.dao.UserRepository;
import com.example.demo.dto.LoginDto;
import com.example.demo.dto.UserDto;
import com.example.demo.entity.User;
import com.example.demo.result.Result;
import com.example.demo.service.UserService;
import com.example.demo.utils.JWTUtils;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;

    @Override
    public Result logout(HttpServletRequest httpServletRequest) {
        // todo jwt无法主动失效，需使用redis存储有效jwt，退出登录时退役jwt
        return Result.success("登出成功", null);
    }

    @Override
    public Result login(LoginDto loginDTO, HttpServletResponse httpServletResponse) {
        String username = loginDTO.getUsername();
        String password = loginDTO.getPassword();
        if (username == null || password == null) {
            return Result.error("网络错误");
        }
        Optional<User> user = userRepository.findByUsername(username);
        if (user.isPresent()) {
            if (user.get().getPassword().equals(password)) {
                Map<String, String> map = new HashMap<>();
                map.put("id", String.valueOf(user.get().getId()));
                String s = JWTUtils.createToken(map);
                httpServletResponse.setHeader("token", JWTUtils.createToken(map));
                return Result.success("登陆成功", null);
            }
        }
        return Result.error("用户不存在");
    }

    @Override
    public UserDto getMe(HttpServletRequest httpServletRequest) {
        String token = httpServletRequest.getHeader("token");
        DecodedJWT verify = JWTUtils.verify(token);
        Long id = Long.valueOf(verify.getId());
        Optional<User> user = userRepository.findById(id);
        return user.map(UserDto::new).orElse(null);
    }

    @Override
    public Result register(LoginDto loginDTO) {
        String username = loginDTO.getUsername();
        String password = loginDTO.getPassword();
        if (username == null || password == null) {
            return Result.error("网络错误");
        }
        Optional<User> user = userRepository.findByUsername(username);
        if (user.isPresent()) {
            return Result.error("用户名已被占用");
        }
        User newUser = new User();
        newUser.setUsername(username);
        newUser.setPassword(password);
        userRepository.save(newUser);
        return Result.success("注册成功", null);
    }

    @Override
    public Result changePassword(LoginDto loginDTO) {
        Optional<User> user = userRepository.findByUsername(loginDTO.getUsername());
        if (user.isEmpty()) {
            return Result.error("用户不存在");
        } else if (user.get().getPassword().equals(loginDTO.getPassword())) {
            user.get().setPassword(loginDTO.getPassword());
            userRepository.save(user.get());
            return Result.success("修改成功", null);
        } else {
            return Result.error("密码错误");
        }
    }
}
