ease 1:

ID: 1
Project: Education Project
Product: AutoHUB
Release Version: 1.0
Module: SPA (front-end)
Detected Build: 0.1.5.1
Summary: After unsuccessful authorization attempts, errors occur when trying to register.
Description: As a guest, I attempt to log in but enter incorrect authentication data, resulting in an error. After that, I close the authorization window and WITHOUT refreshing the page, I open the registration window. Before it opens, there is some loading process, after which it displays an error.
Steps to Replicate: 
  1) Open start page as a guest
  2) Open login modal and send incorrect authentication data
  3) Close login modal and open registration modal
AR: Before reg modal opens, there is some loading process, after which it displays an error.
ER: Reg modal opens without loading process and error.
Attachmets: 
  ![image](https://github.com/VadHane/labs_302/assets/65092760/41ba568c-9f0f-48b2-bc33-c67153b3810c)
  ![image](https://github.com/VadHane/labs_302/assets/65092760/0ddecc86-d078-4bed-8ae2-8e4bf3b03d95)
Remarks: -
Defect Probability: High.
Defect Severity: Major.
Defect Priority: High.
Reported By: QA team
Assigned To: Dev team
Status: OPEN (NEW)
Fixed Build Version: -


ID: 2
Project: Education Project
Product: AutoHUB
Release Version: 1.0
Module: SPA (front-end)
Detected Build: 0.1.5.1
Summary: Incorrect sizes of elements.
Description: As an administrator, I access the user page and open a modal window to edit user information. When attempting to create a new role for the user, there is a text message and a confirmation button with different sizes that are visually inconsistent.
Steps to Replicate: 
  1) Log in as admin
  2) Open 'user' page
  3) Open edit modal for any user
  4) Try to type a random symbols into field for role
AR: There are elements with incorrect size.
ER: There are alements whose have got a same size.
Attachmets: 
  ![image](https://github.com/VadHane/labs_302/assets/65092760/05ef5b84-4b27-40c9-9480-138a6068a1e3)
Remarks: -
Defect Probability: Low
Defect Severity: Trivial.
Defect Priority: Low
Reported By: QA team
Assigned To: Dev team
Status: OPEN (NEW)
Fixed Build Version: -
