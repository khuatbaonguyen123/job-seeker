package com.job_seeker.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Employer")
public class Employer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @OneToOne
    @JoinColumn(name = "UserID", unique = true)
    private User user;

    @ManyToOne
    @JoinColumn(name = "CompanyID", nullable = false)
    private Company company;

    // Getters and Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Company getCompany() {
        return company;
    }

    public void setCompany(Company company) {
        this.company = company;
    }
}

