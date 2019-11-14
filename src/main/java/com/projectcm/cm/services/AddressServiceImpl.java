package com.projectcm.cm.services;

import com.projectcm.cm.entities.Address;
import com.projectcm.cm.repos.AddressRepsitory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AddressServiceImpl implements AddressService {

    @Autowired
    private AddressRepsitory addressRepsitory;

    @Override
    public Address saveAddress(Address address) {
        return addressRepsitory.save(address);
    }

    @Override
    public List<Address> getAllAddresses() {
        return addressRepsitory.findAll();
    }

    @Override
    public Address updateAddress(Address address) {
        return addressRepsitory.save(address);
    }

    @Override
    public void deleteAddress(Address address) {
        addressRepsitory.delete(address);
    }

    @Override
    public Address getAddress(Long id) {
        return addressRepsitory.findById(id).get();
    }

    @Override
    public Boolean existsById(Long id) {
        return addressRepsitory.existsById(id);
    }
}
