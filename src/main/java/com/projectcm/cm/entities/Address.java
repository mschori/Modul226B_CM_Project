package com.projectcm.cm.entities;

import javax.persistence.*;

@Entity
@Table(name = "address")

public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "address")
    private String address;
    @Column(name = "code")
    private String code;
    @Column(name = "city")
    private String city;
    @Column(name = "fk_member")
    private Long fk_member;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public Long getFk_member() {
        return fk_member;
    }

    public void setFk_member(Long fk_member) {
        this.fk_member = fk_member;
    }
}
