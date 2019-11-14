package com.projectcm.cm.services;

import com.projectcm.cm.entities.Contact;

import java.util.List;

public interface ContactService {
    Contact saveContact(Contact contact);

    List<Contact> getAllContacts();

    Contact updateContact(Contact contact);

    void deleteContact(Contact contact);

    Contact getContact(Long id);

    Boolean existsById(Long id);
}
