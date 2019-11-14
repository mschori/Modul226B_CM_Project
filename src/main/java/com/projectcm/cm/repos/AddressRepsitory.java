package com.projectcm.cm.repos;

import com.projectcm.cm.entities.Address;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AddressRepsitory extends JpaRepository<Address, Long> {

    @Query("SELECT a FROM Address a WHERE a.fk_member = :member_id")
    List<Address> getAddressesFromMember(@Param("member_id") Long member_id);

}
