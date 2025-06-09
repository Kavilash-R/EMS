package com.project.employee.repository;

import com.project.employee.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

// this interface is created to perform CRUD operations in Employee table
public interface EmployeeRepository extends JpaRepository<Employee,Long> {
}
