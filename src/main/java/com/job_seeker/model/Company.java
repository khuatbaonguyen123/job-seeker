package com.job_seeker.model;

import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name = "Company")
public class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "Name", nullable = false)
    private String name;

    @ManyToOne
    @JoinColumn(name = "IndustryID", nullable = false)
    private Industry industry;

    @Column(name = "WebsiteURL")
    private String websiteUrl;

    @Column(name = "Description")
    private String description;

    @OneToMany(mappedBy = "company")
    private Set<Employer> employers;

    // Getters and Setters
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Industry getIndustry() {
        return industry;
    }

    public void setIndustry(Industry industry) {
        this.industry = industry;
    }

    public String getWebsiteUrl() {
        return websiteUrl;
    }

    public void setWebsiteUrl(String websiteUrl) {
        this.websiteUrl = websiteUrl;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Set<Employer> getEmployers() {
        return employers;
    }

    public void setEmployers(Set<Employer> employers) {
        this.employers = employers;
    }
}
