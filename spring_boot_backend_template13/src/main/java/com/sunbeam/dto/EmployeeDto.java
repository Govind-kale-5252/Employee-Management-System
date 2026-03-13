package com.sunbeam.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EmployeeDto 
{
	private Long id;
    private String name;
    private String phone;
    private String email;
    private String department;
    
    

}
