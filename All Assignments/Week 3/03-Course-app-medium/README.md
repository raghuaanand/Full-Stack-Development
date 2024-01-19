## Create a course selling website

### Description 

Functionality the same as 02-course-app-easy. ROutes are different though.
We now need to implement actual authentication here.
we are going to use json web tokens for the same.
when the uer signs up, they should get back a jwt that is valid for 1 hour.
They should then send just that jwt vs sending username and password to the authenticated routes.

YOu need to understand the APT of jwt. We will be covering this in the extra recorded session this week.


## Routes

Login and signup still needs to send username and password.(this is send one time only)

Next time for any user authentication we need to send the tokens and not the uername and password. we will get this token when we sign up 

 