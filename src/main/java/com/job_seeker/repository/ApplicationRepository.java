package com.job_seeker.repository;

import com.job_seeker.model.Application;
import com.job_seeker.model.Job;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ApplicationRepository extends JpaRepository<Application,Integer> {
    List<Application> findByJob(Optional<Job> job);
}
