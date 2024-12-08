package com.job_seeker.model;

import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name = "Job_Level")
public class JobLevel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "Name", nullable = false)
    private String name;

    @OneToMany(mappedBy = "level")
    private Set<Job> jobs;

    // Getters and Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Job> getJobs() {
        return jobs;
    }

    public void setJobs(Set<Job> jobs) {
        this.jobs = jobs;
    }
}
