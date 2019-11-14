package com.projectcm.cm.repos;

import com.projectcm.cm.entities.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ContactRepository extends JpaRepository<Contact, Long> {

    @Query("SELECT c FROM Contact c WHERE c.fk_member = :member_id")
    List<Contact> getAddressesFromMember(@Param("member_id") Long member_id);

}
