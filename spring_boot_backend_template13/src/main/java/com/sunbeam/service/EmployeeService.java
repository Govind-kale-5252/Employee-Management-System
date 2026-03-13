package com.sunbeam.service;

import java.util.List;

import com.sunbeam.entities.Employee;

public interface EmployeeService 
{
	 
	Employee postEmployee(Employee employee);
	
	List<Employee> findAllEmployee();
	
	void deleteById(Long id);
	
	Employee findById(Long id);
	
	Employee updateEmployee(Long id, Employee employee);
	 
}
