package com.projectcm.cm.services;

import com.projectcm.cm.entities.Address;

import java.util.List;

public interface AddressService {
    Address saveAddress(Address address);

    List<Address> getAllAddresses();

    Address updateAddress(Address address);

    void deleteAddress(Address address);

    Address getAddress(Long id);

    Boolean existsById(Long id);
}
