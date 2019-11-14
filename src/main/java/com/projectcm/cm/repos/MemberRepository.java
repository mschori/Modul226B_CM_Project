package com.projectcm.cm.repos;

import com.projectcm.cm.entities.Contact;
import com.projectcm.cm.entities.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MemberRepository extends JpaRepository<Member, Long> {
}
