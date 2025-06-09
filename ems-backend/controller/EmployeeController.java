package com.project.employee.controller;

// here we are going to create api for Employee

import com.project.employee.dto.EmployeeDto;
import com.project.employee.entity.Employee;
import com.project.employee.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor

@RestController // it is used to mention it handles http methods
                // this class is now spring mvc class controller
@RequestMapping("/api/employees") // it is the base url that has all apis under this
public class EmployeeController {
    private EmployeeService employeeService;

    // Build add employee REST API
    @PostMapping  // POST request
    public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employeeDto){ // this @RequestBody annotation is used to extract json to java object from client
        EmployeeDto savedEmployee = employeeService.createEmployee(employeeDto);
        return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
    }

    // Build get Employee REST API
    @GetMapping("{id}")
    public ResponseEntity<EmployeeDto> getEmployeeById(@PathVariable("id") Long employeeId){
        EmployeeDto employeeDto = employeeService.getEmployee(employeeId);
        return ResponseEntity.ok(employeeDto);
    }
    // ResponseEntity<EmployeeDto> -> we use ResponseEntity as return type cause with this we can
    // pass data, and additionally we can send http status like 200, 204, 404
    // if we don't want to use responseEntity we can use just List<EmployeeDto> as return type
    // it just returns the data but not the status code.

    // Build getAll employees REST API
    @GetMapping
    public ResponseEntity<List<EmployeeDto>> getAllEmployees(){
        List<EmployeeDto> employees = employeeService.getAllEmployees();
        return ResponseEntity.ok(employees);
    }

    // Build update employee REST API
    @PutMapping("{id}")
    public ResponseEntity<EmployeeDto> updateEmployee(@PathVariable("id") Long employeeId,
                                                      @RequestBody EmployeeDto updatedEmployee){
        EmployeeDto employeeDto = employeeService.updateEmployee(employeeId,updatedEmployee);
        return ResponseEntity.ok(employeeDto);
    }

    // Build delete employee REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("id") Long employeeId){
        employeeService.deleteEmployee(employeeId);
        return ResponseEntity.ok("deleted successfully");
    }




}
