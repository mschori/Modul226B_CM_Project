package com.projectcm.cm.services;

import com.projectcm.cm.entities.Member;
import java.util.List;

public interface MemberService {
    Member saveMember(Member member);

    List<Member> getAllMembers();

    Member updateMember(Member member);

    void deleteMember(Member member);

    Member getMember(Long id);

    Boolean existsById(Long id);
}
