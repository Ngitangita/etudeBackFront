package com.incription.inscription.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "clients")
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Clients {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column
    @Basic
    private Long id;
    @Column(length = 150, nullable = false)
    private String firstName;
    @Column(length = 150)
    private String lastName;
    @Column(nullable = false)
    private String address;
    @Column(length = 20)
    private int phoneNumber;
    @Column(length = 100, nullable = false)
    private String email;
}
