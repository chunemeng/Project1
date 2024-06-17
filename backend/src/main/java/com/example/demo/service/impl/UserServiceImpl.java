package com.example.demo.service.impl;

import com.auth0.jwt.interfaces.DecodedJWT;
import com.example.demo.repo.UserRepository;
import com.example.demo.dto.LoginDto;
import com.example.demo.dto.UserDto;
import com.example.demo.entity.User;
import com.example.demo.result.Result;
import com.example.demo.service.UserService;
import com.example.demo.utils.JWTUtils;
import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.concurrent.TimeUnit;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;

    @Resource
    private RedisTemplate<String, Object> redisTemplate;

    private static final String slat = "THIS-IS-THIS-IS-THIS-IS-THIS";

    private static final String JWT_TOKEN_HEADER = "jwt-token";


    @Override
    public Result logout(HttpServletRequest httpServletRequest) {
        String token = httpServletRequest.getHeader("authorization");
        if (token == null) {
            return Result.error("未提供JWT令牌");
        }
        DecodedJWT verify = JWTUtils.verify(token);
        if (verify == null) {
            return Result.error("JWT令牌验证失败");
        }

        String id = (verify.getClaim("id").asString());
        if (id != null) {
            redisTemplate.delete("Authentication" + id);
        }

        return Result.success("登出成功", null);
    }

    @Override
    public Result login(LoginDto loginDTO, HttpServletResponse httpServletResponse) {
        return Result.success();
//        String username = loginDTO.getUsername();
//        String password = loginDTO.getPassword();
//        if (username == null || password == null) {
//            return Result.error("网络错误");
//        }
//        Optional<User> user = userRepository.findByUsername(username);
//        if (user.isPresent()) {
//            if (user.get().getPassword().equals(password)) {
//                Map<String, String> map = new HashMap<>();
//                Long userId = user.get().getId();
//                map.put("id", String.valueOf(userId));
//                map.put("date", String.valueOf(System.currentTimeMillis()));
//                final String token = JWTUtils.createToken(map);
//                redisTemplate.opsForValue().set("Authentication" + userId, token, JWTUtils.getExpireTime(), TimeUnit.SECONDS);
//                httpServletResponse.setHeader(JWT_TOKEN_HEADER, token);
//                return Result.success("登陆成功", null);
//            }
//        }
//        return Result.error("用户不存在");
    }

    @Override
    public UserDto getMe(HttpServletRequest httpServletResponse) {
        String token = httpServletResponse.getHeader("Authorization");
//        if (token == null) {
//            return null;
//        }
//
//        DecodedJWT verify = JWTUtils.verify(token);
//        Optional<User> user;
//        String id = null;
//
//        if (verify != null) {
//            id = (verify.getClaim("id")).asString();
//        } else {
//            return null;
//        }
//        user = userRepository.findById(Long.valueOf(id));
        return new UserDto(userRepository.findById(1l).get());
//        return user.map(UserDto::new).orElse(null);
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
    public Result changePassword(LoginDto loginDTO, HttpServletResponse httpServletResponse) {
        Optional<User> user = userRepository.findByUsername(loginDTO.getUsername());
        if (user.isEmpty()) {
            return Result.error("用户不存在");
        } else if (user.get().getPassword().equals(loginDTO.getPassword())) {
            user.get().setPassword(loginDTO.getPassword());
            Long userId = user.get().getId();
            Map<String, String> map = new HashMap<>();
            map.put("id", String.valueOf(userId));
            map.put("date", String.valueOf(System.currentTimeMillis()));
            final String token = JWTUtils.createToken(map);
            redisTemplate.opsForValue().set("Authentication" + userId, token, JWTUtils.getExpireTime(), TimeUnit.SECONDS);
            httpServletResponse.setHeader(JWT_TOKEN_HEADER, token);
            userRepository.save(user.get());
            return Result.success("修改成功", null);
        } else {
            return Result.error("密码错误");
        }
    }
}
