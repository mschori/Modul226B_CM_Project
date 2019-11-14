package com.projectcm.cm.entities;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "member")

public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "firstname")
    private String firstname;
    @Column(name = "lastname")
    private String lastname;
    @Column(name = "company")
    private String company;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval=true)
    @JoinColumn(name = "fk_member")
    private List<Address> adresses = new ArrayList<>();

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval=true)
    @JoinColumn(name = "fk_member")
    private List<Contact> contacts = new ArrayList<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public List<Address> getAdresses() {
        return adresses;
    }

    public void setAdresses(List<Address> adresses) {
        this.adresses = adresses;
    }

    public List<Contact> getContacts() {
        return contacts;
    }

    public void setContacts(List<Contact> contacts) {
        this.contacts = contacts;
    }
}
