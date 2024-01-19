## create a course selling website

### Description

1. Admins should be able to signup
2. Admins should be able to create courses
    1. Course has a title, description, price, and image link.
    2. Course should be able to be published or unpublished.
3. Admins should be able to edit courses
4. Users should be able to sign up
5. Users should be able to purchase courses
6. Users should be able to view purchased courses
7. Users should be able to view all courses

## Routes
### Admin ROutes:
 - POST /admin/signup
    Description: Create a new admin account.
    Input: { username; 'admin', password: 'pass'}
    Output: { message: 'Admin created successfully}
 - POST /admin/login
    Description: Authenticates an admin. It requires the admin to send username and password in the headers.
    Input: Headers: { 'username': 'admin', 'password': 'pass'}
    Output: { message: 'Logged in successfully'}
 - POST /admin/courses
    Description: Create a new course.
    Input: Headers: { 'username': 'admin', 'password':'pass'}