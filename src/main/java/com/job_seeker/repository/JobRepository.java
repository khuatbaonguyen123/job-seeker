package com.job_seeker.repository;

import com.job_seeker.model.Job;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface JobRepository extends JpaRepository<Job, Integer> {
    List<Job> findByTitleContainingIgnoreCase(String keyword);

    List<Job> findByJobDescriptionContainingIgnoreCase(String keyword);
}
