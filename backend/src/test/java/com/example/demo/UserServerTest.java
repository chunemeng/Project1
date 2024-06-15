package com.example.demo;

import com.auth0.jwt.interfaces.Claim;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.example.demo.repo.UserRepository;
import com.example.demo.dto.LoginDto;
import com.example.demo.entity.User;
import com.example.demo.service.impl.UserServiceImpl;
import com.example.demo.utils.JWTUtils;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ValueOperations;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@SpringBootTest
public class UserServerTest {
    @Mock
    UserRepository userRepository;

    @Mock
    private RedisTemplate<String, Object> redisTemplate;

    @Mock
    private ValueOperations<String, String> boundValueOps;

    @Mock
    private HttpServletRequest request;

    @Mock
    private HttpServletResponse response;

    @Mock
    private DecodedJWT decodedJWT;

    @Mock
    private Claim claim;

    @InjectMocks
    private UserServiceImpl service;

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
    public void setup() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testLogout() {
        doReturn(null).when(request).getHeader(any());
        service.logout(request);

        doReturn("").when(request).getHeader(any());
        when(JWTUtils.verify(any())).thenReturn(null);
        service.logout(request);

        when(JWTUtils.verify(any())).thenReturn(decodedJWT);
        doReturn(claim).when(decodedJWT).getClaim(any());
        doReturn("").when(claim).asString();
        service.logout(request);
    }

    @Test
    void testLogin() {
        LoginDto loginDto = new LoginDto();
        service.login(loginDto, response);


        loginDto.setUsername("admin");
        loginDto.setPassword("admin");
        Optional<User> user = Optional.empty();
        doReturn(user).when(userRepository).findByUsername(any());
        service.login(loginDto, response);


        user = Optional.of(new User());
        user.get().setPassword("admin");
        doReturn(user).when(userRepository).findByUsername(any());
        doReturn(boundValueOps).when(redisTemplate).opsForValue();
        service.login(loginDto, response);
    }

    @Test
    void testGetMe() {
        doReturn(null).when(request).getHeader(any());
        service.getMe(request);

        doReturn("").when(request).getHeader(any());
        when(JWTUtils.verify(any())).thenReturn(null);
        service.getMe(request);

        Optional<User> user = Optional.empty();
        doReturn(user).when(userRepository).findById(any());
        when(JWTUtils.verify(any())).thenReturn(decodedJWT);
        doReturn(claim).when(decodedJWT).getClaim(any());
        doReturn("1").when(claim).asString();
        service.getMe(request);
    }

    @Test
    void testChangePassword(){
        LoginDto loginDto = new LoginDto();

        loginDto.setUsername("admin");
        loginDto.setPassword("admin");
        Optional<User> user = Optional.empty();
        doReturn(user).when(userRepository).findById(any());
        service.changePassword(loginDto, response);

        user = Optional.of(new User());
        user.get().setPassword("ad");
        doReturn(user).when(userRepository).findByUsername(any());
        service.changePassword(loginDto, response);

        user.get().setPassword("admin");
        doReturn(user).when(userRepository).findByUsername(any());
        doReturn(boundValueOps).when(redisTemplate).opsForValue();
        service.changePassword(loginDto, response);
    }

    @Test
    void testRegister() {
        LoginDto loginDto = new LoginDto();
        service.register(loginDto);


        loginDto.setUsername("admin");
        loginDto.setPassword("admin");
        Optional<User> user = Optional.of(new User());
        doReturn(user).when(userRepository).findByUsername(any());
        service.register(loginDto);

        doReturn(user.get()).when(userRepository).save(any());
        user = Optional.empty();
        doReturn(user).when(userRepository).findByUsername(any());
        service.register(loginDto);
    }

}
