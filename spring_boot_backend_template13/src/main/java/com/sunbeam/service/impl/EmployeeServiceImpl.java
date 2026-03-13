package com.sunbeam.service.impl;

 
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.dao.EmployeeDao;
import com.sunbeam.entities.Employee;
import com.sunbeam.service.EmployeeService;

import jakarta.persistence.EntityNotFoundException;

@Service
public class EmployeeServiceImpl implements EmployeeService 
{
	@Autowired
	private EmployeeDao employeeDao;

	@Override
	public Employee postEmployee(Employee employee) {
		return employeeDao.save(employee) ;
	}

	@Override
	public List<Employee> findAllEmployee() {
		return employeeDao.findAll();
	}

	@Override
	public void deleteById(Long id) {
		 if(!employeeDao.existsById(id)) {
			 throw new EntityNotFoundException("Employee with Id " + id + " not found");
		 }
		 employeeDao.deleteById(id);
		
	}

	@Override
	public Employee findById(Long id) {		 
		return employeeDao.findById(id).orElse(null);
	}

	@Override
	public Employee updateEmployee(Long id, Employee employee) 
	{
		 Optional<Employee> optionalEmployee = employeeDao.findById(id);
		 if(optionalEmployee.isPresent()) {
			 Employee existingEmployee = optionalEmployee.get();
			 
			 existingEmployee.setEmail(employee.getEmail());
			 existingEmployee.setName(employee.getName());
			 existingEmployee.setPhone(employee.getPhone());
			 existingEmployee.setDepartment(employee.getDepartment());
			 
			 return employeeDao.save(existingEmployee);
		 }
		return null;
	}

	 
}
