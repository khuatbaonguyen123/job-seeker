package com.job_seeker.controller;

import com.job_seeker.dto.JobDetail;
import com.job_seeker.dto.JobOverview;
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

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/{id}/detail")
    public ResponseEntity<JobDetail> getJobDetail(@PathVariable Integer id) {
        JobDetail jobDetail = jobService.getJobDetail(id);
        return ResponseEntity.ok(jobDetail);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/{id}/overview")
    public ResponseEntity<JobOverview> getJobOverview(@PathVariable Integer id) {
        JobOverview jobOverview = jobService.getJobOverview(id);
        return ResponseEntity.ok(jobOverview);
    }

}