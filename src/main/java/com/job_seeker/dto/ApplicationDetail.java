package com.job_seeker.dto;

import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

@Getter
@Setter
public class ApplicationDetail {
    private String candicateName;
    private String candicateEmail;
    private Timestamp createdAt;
    private String status;
}
