package com.example.demo.repo;

import com.example.demo.entity.Task;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface TaskRepository extends JpaRepository<Task, Long> {

    Page<Task> findAllByStatus(Boolean status, Pageable pageable);

    Page<Task> findAllByStatusAndCategory(Boolean status,Short category, Pageable pageable);
    Page<Task> findAllByUserId(Long userId, Pageable pageable);

    Page<Task> findAllByWorkerId(Long workerId, Pageable pageable);
}
