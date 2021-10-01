package dev.neiro.phone.service;

import dev.neiro.phone.dto.PhoneNumberDto;
import dev.neiro.phone.model.PhoneNumber;
import dev.neiro.phone.repository.PhoneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author Panfilov Dmitriy
 * 01.10.2021
 */
@Service
public class PhoneService {
    @Autowired
    private PhoneRepository repository;

    public PhoneNumberDto getInfo(String number){
        PhoneNumber phoneNumber = repository.getPhoneNumbersByPhoneNumber(number);
        PhoneNumberDto phoneNumberDto = new PhoneNumberDto();
        if (phoneNumber != null) {
            phoneNumberDto.setId(phoneNumber.getId());
            phoneNumberDto.setFio(phoneNumber.getFio());
            phoneNumberDto.setPhoneNumber(phoneNumber.getPhoneNumber());
            phoneNumberDto.setAddress(phoneNumber.getAddress());
            phoneNumberDto.setSnils(phoneNumber.getSnils());
        } else {
            phoneNumberDto.setPhoneNumber(number);
        }
        return phoneNumberDto;
    }
}
