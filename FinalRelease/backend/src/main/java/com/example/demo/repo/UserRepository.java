package com.example.demo.repo;

import com.example.demo.dto.AuthDto;
import com.example.demo.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);


    @Query(value = "SELECT  new com.example.demo.dto.AuthDto(u.id, u.password) FROM User u WHERE u.username = ?1")
    Optional<AuthDto> findAuthByUsername(String username);
}
