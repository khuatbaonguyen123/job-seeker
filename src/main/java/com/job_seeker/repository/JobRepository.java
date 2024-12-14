package com.job_seeker.repository;

import com.job_seeker.model.Job;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface JobRepository extends JpaRepository<Job, Integer> {
    List<Job> findByTitleContainingIgnoreCase(String keyword);

    List<Job> findByJobDescriptionContainingIgnoreCase(String keyword);

    Optional<Job> findById(Integer id);
}
