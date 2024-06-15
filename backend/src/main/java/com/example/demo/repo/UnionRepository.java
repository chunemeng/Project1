package com.example.demo.repo;

import com.example.demo.entity.Union;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UnionRepository extends JpaRepository<Union,Long> {
}
