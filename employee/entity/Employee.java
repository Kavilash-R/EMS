package com.project.employee.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter  // getter and setter annotation is used so that we don't have to create getter and setter methods
@Setter
@NoArgsConstructor // same as getter and setter annotation
@AllArgsConstructor

@Entity // this used so that we mention it as jpa entity
        // jpa is used for connection the database tables jpa entity represents table in relational database
        // JPA - Java Persistence API
        // now this class is managed by JPA provider by specifying @Entity

@Table(name = "employees")  // used to create a table in the database with name as provided by the parameters


public class Employee {

    @Id  // marks as primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) // strategy is used for unique that automatically assign
    private Long id;

    @Column(name = "first_name") // its optional but if we don't mention it then the table column name is taken as the variable name
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "email_id", nullable = false, unique = true)
    private String email;
}
