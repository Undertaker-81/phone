package dev.neiro.phone.model;



import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @author Panfilov Dmitriy
 * 01.10.2021
 */
@Entity
@Table
public class PhoneNumbers {

    @Id
    private  Long id;
}
