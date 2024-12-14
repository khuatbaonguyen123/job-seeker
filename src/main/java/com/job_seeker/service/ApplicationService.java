package com.job_seeker.service;

import com.job_seeker.model.Application;
import com.job_seeker.model.Job;
import com.job_seeker.repository.ApplicationRepository;
import com.job_seeker.repository.JobRepository;
import com.job_seeker.dto.ApplicationDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.ResourceAccessException;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ApplicationService {

    @Autowired
    ApplicationRepository applicationRepository;
    @Autowired
    JobRepository jobRepository;

    private ApplicationDetail mapToDetail(Application application) {
        ApplicationDetail applicationDetail = new ApplicationDetail();
        applicationDetail.setCandicateEmail(application.getCandidate().getUser().getEmail());
        applicationDetail.setStatus(application.getStatus().toString());
        applicationDetail.setCandicateName(application.getCandidate().getUser().getName());
        applicationDetail.setCreatedAt(application.getCreatedAt());

        return applicationDetail;

    }
    public List<Application> getApplicationList() {
        return applicationRepository.findAll();
    }
    

    public List<ApplicationDetail> getApplicationsByJob(Integer jobId) {
        Optional<Job> jobOptional = jobRepository.findById(jobId);
        if (jobOptional.isEmpty()) {
            throw new ResourceAccessException("Job not found with id " + jobId);
        }
        Optional <List<Application>> applicationList = Optional.ofNullable(applicationRepository.findByJob(jobOptional));
        return applicationList
                .orElse(Collections.emptyList())
                .stream()
                .map(this::mapToDetail)
                .collect(Collectors.toList());
    }

    public void createApplication(Application application) {
        applicationRepository.save(application);
    }
}
