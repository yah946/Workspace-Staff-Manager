# Workspace Staff Manager

A web application designed for **WorkSphere** to manage staff members and control access to specific rooms in the company based on job roles. The application provides an interactive floor plan where employees can be assigned to rooms according to predefined rules and room capacities.

---

## 📌 Features

### 1. Staff Management
- Add new employees through a sidebar form.
- Edit employee details (name, email, phone, job position, profile picture, experience).
- Upload images via URL or local file selection.
- Dynamic experience fields allowing multiple entries.
- Sidebar displays all registered employees.

### 2. Interactive Company Floor Plan
- Shows a detailed plan including:
  - Conference Room  
  - Reception  
  - Server Room  
  - Security Room  
  - Staff Room  
  - Archive Room
- Each room has a maximum capacity.
- Employees can be:
  - Dragged and dropped into rooms  
  - Added through room-specific buttons
- Remove an employee from a room using an **X icon**.

### 3. Role-Based Access Rules

| Role               | Access Rules                                                |
|-------------------|-------------------------------------------------------------|
| Receptionist       | Reception only                                              |
| Technician         | Server Room only                                            |
| Security Agent     | Security Room only                                          |
| Manager            | Allowed everywhere                                          |
| Cleaning Staff     | Everywhere except the Archive Room                          |
| Other Roles        | Free access except restricted rooms                         |

If an employee is assigned to a non-permitted room, an **error message** appears.

### 4. Auto-Assign Feature
A dedicated button automatically assigns each employee to their appropriate room based on their job role.

### 5. Responsive Design
The layout adapts to all screen sizes using Tailwind CSS.

**Portrait modes:**
- Large desktop: ≥1280px  
- Small desktop: 1024px–1279px  
- Tablet: 768px–1023px  
- Mobile: ≤767px  

**Landscape modes:**
- Mobile landscape: 768px–1023px  
- Tablet landscape: 1024px–1279px  

---

## 🛠️ Technologies Used
- HTML5  
- Tailwind CSS  
- Vanilla JavaScript  

---

📘 How to Use
-------------

### Adding a New Employee

1.  Click **Add Employee** in the sidebar.
    
2.  A modal appears with fields:
    
    *   Name
        
    *   Job position
        
    *   Profile image (URL or local upload)
        
    *   Email
        
    *   Phone number
        
    *   Professional experience (dynamic list)
        
3.  Submit to add the employee to the sidebar list.
    

### Assigning Employees

*   **Drag & drop** employees into allowed rooms**or**
    
*   Use the **Add** button inside rooms to select eligible employees.
    

### Editing & Removing

*   Click an employee in the sidebar to edit details.
    
*   Remove an employee from a room via the **X icon**.
    

### Validation

If a user is assigned to a forbidden room:

*   The assignment is blocked.
    
*   A warning message is displayed.
    
---
📄 License
----------

This project is licensed under the **MIT License**.
