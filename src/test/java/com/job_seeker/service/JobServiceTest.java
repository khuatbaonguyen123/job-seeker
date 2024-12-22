package com.job_seeker.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.web.client.ResourceAccessException;

import com.job_seeker.model.Job;
import com.job_seeker.repository.JobRepository;

class JobServiceTest {

    @Mock
    private JobRepository jobRepository;

    @InjectMocks
    private JobService jobService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testCreateJob() {
        Job job = new Job();
        jobService.createJob(job);
        verify(jobRepository, times(1)).save(job);
    }


    @Test
    void testGetJobDetailNotFound() {
        when(jobRepository.findById(1)).thenReturn(Optional.empty());

        Exception exception = assertThrows(ResourceAccessException.class, () -> {
            jobService.getJobDetail(1);
        });

        assertEquals("Job not found with id 1", exception.getMessage());
        verify(jobRepository, times(1)).findById(1);
    }

    @Test
    void testGetJobOverviewNotFound() {
        when(jobRepository.findById(1)).thenReturn(Optional.empty());

        Exception exception = assertThrows(ResourceAccessException.class, () -> {
            jobService.getJobOverview(1);
        });

        assertEquals("Job not found with id 1", exception.getMessage());
        verify(jobRepository, times(1)).findById(1);
    }
}