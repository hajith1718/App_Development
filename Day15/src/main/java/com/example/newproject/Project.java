package com.example.newproject;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="classes")
public class Project {
	@Id
	private int id;
	private String name;
	private String dept;
	public Project(int id, String name, String dept, int phone) {
		super();
		this.id = id;
		this.name = name;
		this.dept = dept;
		this.phone = phone;
	}
	private int phone;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDept() {
		return dept;
	}
	public void setDept(String dept) {
		this.dept = dept;
	}
	public int getPhone() {
		return phone;
	}
	public void setPhone(int phone) {
		this.phone = phone;
	}
	@Override
	public String toString() {
		return "Project [id=" + id + ", name=" + name + ", dept=" + dept + ", phone=" + phone + "]";
	}
	
	

}