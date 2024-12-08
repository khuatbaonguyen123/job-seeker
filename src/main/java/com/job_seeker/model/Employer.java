package com.job_seeker.model;

import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name = "Employer")
public class Employer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Integer id;

    @OneToOne
    @JoinColumn(name = "UserID", unique = true)
    private User user;

    @ManyToOne
    @JoinColumn(name = "CompanyID")
    private Company company;

    @Column(name = "PhoneNumber")
    private String phoneNumber;

    @OneToMany(mappedBy = "postedBy")
    private Set<Job> jobs;

    // Getters and Setters

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Company getCompany() {
        return company;
    }

    public void setCompany(Company company) {
        this.company = company;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}