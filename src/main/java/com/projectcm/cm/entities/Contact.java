package com.projectcm.cm.entities;

import javax.persistence.*;

@Entity
@Table(name = "contact")

public class Contact {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name")
    private String name;
    @Column(name = "type")
    private String type;
    @Column(name = "sort")
    private String sort;
    @Column(name = "value")
    private String value;
    @Column(name = "fk_member")
    private Long fk_member;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getSort() {
        return sort;
    }

    public void setSort(String sort) {
        this.sort = sort;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public Long getFk_member() {
        return fk_member;
    }

    public void setFk_member(Long fk_member) {
        this.fk_member = fk_member;
    }
}
