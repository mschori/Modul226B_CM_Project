package com.projectcm.cm.controllers;

import com.projectcm.cm.entities.Address;
import com.projectcm.cm.entities.Member;
import com.projectcm.cm.repos.MemberRepository;
import com.projectcm.cm.repos.AddressRepsitory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.CascadeType;
import javax.persistence.OneToMany;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/members")
public class MemberController {

    @Autowired
    MemberRepository memberRepository;

    @CrossOrigin //allows cross-origin-requests
    @GetMapping
    public List<Member> getMembers(){
        return memberRepository.findAll();
    }

    @CrossOrigin //allows cross-origin-requests
    @GetMapping("/{id}")
    public Optional<Member> getMember(@PathVariable("id") Long id){
        return memberRepository.findById(id);
    }

    @CrossOrigin //allows cross-origin-requests
    @PostMapping
    public Member createMember(@RequestBody Member member){
        return memberRepository.save(member);
    }

    @CrossOrigin //allows cross-origin-requests
    @PutMapping
    public Member updateMember(@RequestBody Member member){
        return memberRepository.save(member);
    }

    @CrossOrigin //allows cross-origin-requests
    @DeleteMapping
    public void deleteMember(@RequestBody Member member){
        memberRepository.delete(member);
    }

}
