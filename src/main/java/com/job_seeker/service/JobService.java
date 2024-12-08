package com.job_seeker.service;

import com.job_seeker.dto.JobResponse;
import com.job_seeker.model.Job;
import com.job_seeker.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class JobService {

    @Autowired
    private JobRepository jobRepository;

    public List<JobResponse> searchJobs(String keyword) {
        List<Job> jobs = jobRepository.findByTitleContainingIgnoreCase(keyword);
        List<Job> jobsByDescription = jobRepository.findByJobDescriptionContainingIgnoreCase(keyword);
        jobs.addAll(jobsByDescription);

        return jobs.stream().map(this::mapToResponse).collect(Collectors.toList());
    }

    private JobResponse mapToResponse(Job job) {
        JobResponse jobResponse = new JobResponse();

        jobResponse.setId(job.getId());
        jobResponse.setTitle(job.getTitle());
        jobResponse.setCompanyName(job.getPostedBy().getCompany().getName());
        jobResponse.setPostedDate(job.getPostedDate());
        jobResponse.setLocationName(job.getLocation().getName());
        jobResponse.setEmploymentTypeName(job.getEmploymentType().getName());

        return jobResponse;
    }
}