package com.projectcm.cm.services;

import com.projectcm.cm.entities.Contact;
import com.projectcm.cm.repos.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactServiceImpl implements ContactService {

    @Autowired
    ContactRepository contactRepository;

    @Override
    public Contact saveContact(Contact contact) {
        return contactRepository.save(contact);
    }

    @Override
    public List<Contact> getAllContacts() {
        return contactRepository.findAll();
    }

    @Override
    public Contact updateContact(Contact contact) {
        return contactRepository.save(contact);
    }

    @Override
    public void deleteContact(Contact contact) {
        contactRepository.delete(contact);
    }

    @Override
    public Contact getContact(Long id) {
        return contactRepository.findById(id).get();
    }

    @Override
    public Boolean existsById(Long id) {
        return contactRepository.existsById(id);
    }
}
