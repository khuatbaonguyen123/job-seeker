package com.job_seeker.service;

import com.job_seeker.dto.JobDetail;
import com.job_seeker.dto.JobOverview;
import com.job_seeker.dto.JobResponse;
import com.job_seeker.model.Company;
import com.job_seeker.model.Job;
import com.job_seeker.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.ResourceAccessException;

import java.util.List;
import java.util.Optional;
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

    public JobDetail getJobDetail(Integer jobId) {
        Optional<Job> jobOptional = jobRepository.findById(jobId);
        if (jobOptional.isPresent()) {
            Job job = jobOptional.get();
            return mapToDetail(job);
        } else {
            throw new ResourceAccessException("Job not found with id " + jobId);
        }
    }

    public JobOverview getJobOverview(Integer jobId) {
        Optional<Job> jobOptional = jobRepository.findById(jobId);
        if (jobOptional.isPresent()) {
            Job job = jobOptional.get();
            return mapToOverview(job);
        } else {
            throw new ResourceAccessException("Job not found with id " + jobId);
        }
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

    private JobDetail mapToDetail(Job job) {
        JobDetail jobDetail = new JobDetail();

        Company company = job.getPostedBy().getCompany();

        jobDetail.setTitle(job.getTitle());
        jobDetail.setEmploymentTypeName(job.getEmploymentType().getName());
        jobDetail.setLocationName(job.getLocation().getName());
        jobDetail.setPostedDate(job.getPostedDate());
        jobDetail.setCompanyName(company.getName());
        jobDetail.setCompanyWebsiteUrl(company.getWebsiteUrl());
        jobDetail.setPhoneNumber(job.getPostedBy().getPhoneNumber());
        jobDetail.setEmployerEmail(job.getPostedBy().getUser().getEmail());
        jobDetail.setJobDescription(job.getJobDescription());

        return jobDetail;
    }

    private JobOverview mapToOverview(Job job) {
        JobOverview jobOverview = new JobOverview();

        Company company = job.getPostedBy().getCompany();

        String jobSalary = job.getMinimumWage().toString() + "$ - " + job.getMaximumWage().toString() + "$";

        jobOverview.setSalaryRange(jobSalary);
        jobOverview.setGender(job.getGender());
        jobOverview.setCareerLevel(job.getLevel().getName());
        jobOverview.setIndustry(company.getIndustry().getName());
        jobOverview.setYearsOfExperience(job.getYearsOfExperience());
        jobOverview.setQualification(job.getQualification().getName());

        return jobOverview;
    }
}