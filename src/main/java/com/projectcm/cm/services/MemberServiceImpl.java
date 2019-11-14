package com.projectcm.cm.services;

import com.projectcm.cm.entities.Member;
import com.projectcm.cm.repos.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MemberServiceImpl implements MemberService {

    @Autowired
    private MemberRepository memberRepository;

    @Override
    public Member saveMember(Member member) {
        return memberRepository.save(member);
    }

    @Override
    public List<Member> getAllMembers() {
        return memberRepository.findAll();
    }

    @Override
    public Member updateMember(Member member) {
        return memberRepository.save(member);
    }

    @Override
    public void deleteMember(Member member) {
        memberRepository.delete(member);
    }

    @Override
    public Member getMember(Long id) {
        return memberRepository.findById(id).get();
    }

    @Override
    public Boolean existsById(Long id) {
        return memberRepository.existsById(id);
    }
}
