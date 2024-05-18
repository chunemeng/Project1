package com.example.demo.dto;

import com.example.demo.entity.User;
import lombok.Value;

import java.io.Serializable;

/**
 * DTO for {@link User}
 */
@Value
public class UserDto implements Serializable {
    String nickname;
    String username;
    String email;
    String cover;

    boolean status;
    public UserDto(User user) {
        this.nickname = user.getNickname();
        this.username = user.getUsername();
        this.email = user.getEmail();
        this.status = user.isStatus();
        this.cover = user.getCover();
    }
}