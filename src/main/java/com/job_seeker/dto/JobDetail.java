package com.job_seeker.dto;

import java.time.LocalDate;

public class JobDetail {
    private String title;
    private String employmentTypeName;
    private String locationName;
    private LocalDate postedDate;
    private String companyName;
    private String companyWebsiteUrl;
    private String phoneNumber;
    private String employerEmail;
    private String jobDescription;

    // Getter and Setter methods

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getEmploymentTypeName() {
        return employmentTypeName;
    }

    public void setEmploymentTypeName(String employmentTypeName) {
        this.employmentTypeName = employmentTypeName;
    }

    public String getLocationName() {
        return locationName;
    }

    public void setLocationName(String locationName) {
        this.locationName = locationName;
    }

    public LocalDate getPostedDate() {
        return postedDate;
    }

    public void setPostedDate(LocalDate postedDate) {
        this.postedDate = postedDate;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getCompanyWebsiteUrl() {
        return companyWebsiteUrl;
    }

    public void setCompanyWebsiteUrl(String companyWebsiteUrl) {
        this.companyWebsiteUrl = companyWebsiteUrl;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmployerEmail() {
        return employerEmail;
    }

    public void setEmployerEmail(String employerEmail) {
        this.employerEmail = employerEmail;
    }

    public String getJobDescription() {
        return jobDescription;
    }

    public void setJobDescription(String jobDescription) {
        this.jobDescription = jobDescription;
    }
}
