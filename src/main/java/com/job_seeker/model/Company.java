package com.job_seeker.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Company")
public class Company {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "MinimumEmployees")
    private int minimumEmployees;

    @Column(name = "MaximumEmployees")
    private int maximumEmployees;

    @Column(name = "Description")
    private String description;

    // Getters and Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getMinimumEmployees() {
        return minimumEmployees;
    }

    public void setMinimumEmployees(int minimumEmployees) {
        this.minimumEmployees = minimumEmployees;
    }

    public int getMaximumEmployees() {
        return maximumEmployees;
    }

    public void setMaximumEmployees(int maximumEmployees) {
        this.maximumEmployees = maximumEmployees;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}

