package com.example.demo.dao;

import com.example.demo.entity.Worker;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface WorkerRepository extends JpaRepository<Worker, Long> {
    Page<Worker> findAllByStatus(Boolean status, Pageable pageable);
}
