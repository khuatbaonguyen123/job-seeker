package com.job_seeker.controller;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.job_seeker.dto.JobDetail;
import com.job_seeker.dto.JobOverview;
import com.job_seeker.dto.JobResponse;
import com.job_seeker.model.Job;
import com.job_seeker.service.JobService;

class JobControllerTest {

    private MockMvc mockMvc;

    @Mock
    private JobService jobService;

    @InjectMocks
    private JobController jobController;

    private ObjectMapper objectMapper;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(jobController).build();
        objectMapper = new ObjectMapper();
    }

    @Test
    void testPostJob() throws Exception {
        Job job = new Job();
        
        mockMvc.perform(post("/api/jobs")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(job)))
                .andExpect(status().isOk())
                .andExpect(content().string("Job post successfully"));
    }

    @Test
    void testSearchJobs() throws Exception {
        List<JobResponse> jobs = Arrays.asList(new JobResponse(), new JobResponse());
        when(jobService.searchJobs("java")).thenReturn(jobs);

        mockMvc.perform(get("/api/jobs/search")
                .param("keyword", "java"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON));
    }

    @Test
    void testGetJobDetail() throws Exception {
        JobDetail jobDetail = new JobDetail();
        when(jobService.getJobDetail(1)).thenReturn(jobDetail);

        mockMvc.perform(get("/api/jobs/1/detail"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON));
    }

    @Test
    void testGetJobOverview() throws Exception {
        JobOverview jobOverview = new JobOverview();
        when(jobService.getJobOverview(1)).thenReturn(jobOverview);

        mockMvc.perform(get("/api/jobs/1/overview"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON));
    }
}