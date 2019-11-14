package com.projectcm.cm.controllers;

import com.projectcm.cm.entities.Address;
import com.projectcm.cm.repos.AddressRepsitory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/addresses")
public class AddressController {

    @Autowired
    AddressRepsitory addressRepsitory;

    @CrossOrigin //allows cross-origin-requests
    @GetMapping
    public List<Address> getAddresses() {
        return addressRepsitory.findAll();
    }

    @CrossOrigin //allows cross-origin-requests
    @GetMapping("/frommember/{member_id}")
    public List<Address> getAddressesFromMember(@PathVariable("member_id") Long member_id) {
        return addressRepsitory.getAddressesFromMember(member_id);
    }

    @CrossOrigin //allows cross-origin-requests
    @GetMapping("/{id}")
    public Optional<Address> getAddress(@PathVariable("id") Long id) {
        return addressRepsitory.findById(id);
    }

    @CrossOrigin //allows cross-origin-requests
    @PostMapping
    public Address createAddress(@RequestBody Address address) {
        return addressRepsitory.save(address);
    }

    @CrossOrigin //allows cross-origin-requests
    @PutMapping
    public Address updateAddress(@RequestBody Address address) {
        return addressRepsitory.save(address);
    }

    @CrossOrigin //allows cross-origin-requests
    @DeleteMapping
    public void deleteAddress(@RequestBody Address address) {
        addressRepsitory.delete(address);
    }
}
