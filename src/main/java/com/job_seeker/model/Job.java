package com.job_seeker.model;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "Job")
public class Job {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Integer id;

    @Column(name = "Title", nullable = false)
    private String title;

    @ManyToOne
    @JoinColumn(name = "SpecialismID", nullable = false)
    private Specialism specialism;

    @Column(name = "MinimumWage", nullable = false)
    private BigDecimal minimumWage;

    @Column(name = "MaximumWage", nullable = false)
    private BigDecimal maximumWage;

    @ManyToOne
    @JoinColumn(name = "LocationID", nullable = false)
    private Location location;

    @ManyToOne
    @JoinColumn(name = "LevelID", nullable = false)
    private JobLevel level;

    @Column(name = "YearsOfExperience", nullable = false)
    private Integer yearsOfExperience;

    @Column(name = "ApplicationDeadline")
    private LocalDate applicationDeadline;

    @Column(name = "JobDescription")
    private String jobDescription;

    @ManyToOne
    @JoinColumn(name = "EmploymentTypeID", nullable = false)
    private EmploymentType employmentType;

    @Column(name = "Gender")
    private String gender;

    @ManyToOne
    @JoinColumn(name = "QualificationID", nullable = false)
    private Qualification qualification;

    @ManyToOne
    @JoinColumn(name = "PostedBy", nullable = false)
    private Employer postedBy;

    @Column(name = "PostedDate", nullable = false)
    private LocalDate postedDate;

    // Getters and Setters

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Specialism getSpecialism() {
        return specialism;
    }

    public void setSpecialism(Specialism specialism) {
        this.specialism = specialism;
    }

    public BigDecimal getMinimumWage() {
        return minimumWage;
    }

    public void setMinimumWage(BigDecimal minimumWage) {
        this.minimumWage = minimumWage;
    }

    public BigDecimal getMaximumWage() {
        return maximumWage;
    }

    public void setMaximumWage(BigDecimal maximumWage) {
        this.maximumWage = maximumWage;
    }

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    public JobLevel getLevel() {
        return level;
    }

    public void setLevel(JobLevel level) {
        this.level = level;
    }

    public Integer getYearsOfExperience() {
        return yearsOfExperience;
    }

    public void setYearsOfExperience(Integer yearsOfExperience) {
        this.yearsOfExperience = yearsOfExperience;
    }

    public LocalDate getApplicationDeadline() {
        return applicationDeadline;
    }

    public void setApplicationDeadline(LocalDate applicationDeadline) {
        this.applicationDeadline = applicationDeadline;
    }

    public String getJobDescription() {
        return jobDescription;
    }

    public void setJobDescription(String jobDescription) {
        this.jobDescription = jobDescription;
    }

    public EmploymentType getEmploymentType() {
        return employmentType;
    }

    public void setEmploymentType(EmploymentType employmentType) {
        this.employmentType = employmentType;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Qualification getQualification() {
        return qualification;
    }

    public void setQualification(Qualification qualification) {
        this.qualification = qualification;
    }

    public Employer getPostedBy() {
        return postedBy;
    }

    public void setPostedBy(Employer postedBy) {
        this.postedBy = postedBy;
    }

    public LocalDate getPostedDate() {
        return postedDate;
    }

    public void setPostedDate(LocalDate postedDate) {
        this.postedDate = postedDate;
    }
}
