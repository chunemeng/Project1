package com.example.demo.service.impl;

import com.example.demo.dao.UserRepository;
import com.example.demo.dto.LoginDTO;
import com.example.demo.dto.UserDto;
import com.example.demo.entity.User;
import com.example.demo.result.Result;
import com.example.demo.service.UserService;
import com.example.demo.utils.JWTUtils;
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
    public Result login(LoginDTO loginDTO, HttpServletResponse httpServletResponse) {
        String username = loginDTO.getUsername();
        String password = loginDTO.getPassword();
        if (username == null || password == null) {
            return Result.error("网络错误");
        }
        Optional<User> user = userRepository.findByUsername(username);
        if (user.isPresent()) {
            if (user.get().getPassword().equals(password)) {
                Map<String,String> map = new HashMap<>();
                map.put("username", username);
                String  s= JWTUtils.createToken(map);
                httpServletResponse.setHeader("USER_LOGIN_TOKEN", JWTUtils.createToken(map));
                return Result.success("登陆成功", null);
            }
        }
        return Result.error("用户不存在");
    }

    @Override
    public UserDto getMe(String username) {
        Optional<User> user = userRepository.findByUsername(username);
        return user.map(UserDto::new).orElse(null);
    }
}
