package com.job_seeker.controller;

import com.job_seeker.dto.JobResponse;
import com.job_seeker.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/jobs")
public class JobController {

    @Autowired
    private JobService jobService;

    @GetMapping("/search")
    public ResponseEntity<List<JobResponse>> searchJobs(@RequestParam String keyword) {
        List<JobResponse> jobs = jobService.searchJobs(keyword);
        return ResponseEntity.ok(jobs);
    }

}