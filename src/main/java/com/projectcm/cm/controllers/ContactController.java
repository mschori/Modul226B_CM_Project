package com.projectcm.cm.controllers;

import com.projectcm.cm.entities.Contact;
import com.projectcm.cm.repos.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.EnumSet;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/contacts")
public class ContactController {

    @Autowired
    ContactRepository contactRepository;

    private enum Type {
        Email,
        Telefon,
        Handy,
        Fax
    }

    private enum Sort {
        Privat,
        Geschaeftlich,
        Unbekannt,
    }

    @CrossOrigin //allows cross-origin-requests
    @GetMapping("/types")
    public List<Type> getTypes(){
        return new ArrayList<Type>(EnumSet.allOf(Type.class));
    }

    @CrossOrigin //allows cross-origin-requests
    @GetMapping("/sorts")
    public List<Sort> getSorts(){
        return new ArrayList<Sort>(EnumSet.allOf(Sort.class));
    }

    @CrossOrigin //allows cross-origin-requests
    @GetMapping
    public List<Contact> getContacts(){
        return contactRepository.findAll();
    }

    @CrossOrigin //allows cross-origin-requests
    @GetMapping("/frommember/{member_id}")
    public List<Contact> getContactsFromMember(@PathVariable("member_id") Long member_id){
        return contactRepository.getAddressesFromMember(member_id);
    }

    @CrossOrigin //allows cross-origin-requests
    @GetMapping("/{id}")
    public Optional<Contact> getContact(@PathVariable("id") Long id){
        return contactRepository.findById(id);
    }

    @CrossOrigin //allows cross-origin-requests
    @PostMapping
    public Contact createContact(@RequestBody Contact contact){
        return contactRepository.save(contact);
    }

    @CrossOrigin //allows cross-origin-requests
    @PutMapping
    public Contact updateContact(@RequestBody Contact contact){
        return contactRepository.save(contact);
    }

    @CrossOrigin //allows cross-origin-requests
    @DeleteMapping
    public void deleteContact(@RequestBody Contact contact){
        contactRepository.delete(contact);
    }

}
