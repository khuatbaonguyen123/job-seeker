package com.job_seeker.controller;

import com.job_seeker.model.Application;
import com.job_seeker.service.ApplicationService;
import com.job_seeker.dto.ApplicationDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/applications")
public class ApplicationController {
    @Autowired
    private ApplicationService applicationServices;

    @GetMapping
    public ResponseEntity<List<Application>> getApplicationList() {
        return ResponseEntity.ok(applicationServices.getApplicationList());
    }

    @GetMapping("/{jobId}")
    public List<ApplicationDetail> getApplicationByJob(@PathVariable Integer jobId) {
        return applicationServices.getApplicationsByJob(jobId);
    }

    @PostMapping
    public void createApplication(@RequestBody Application applicationRequest) {
        applicationServices.createApplication(applicationRequest);
    }
}
