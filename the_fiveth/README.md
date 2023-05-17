case 1:

ID: 1 <br />
Project: Education Project <br />
Product: AutoHUB <br />
Release Version: 1.0 <br />
Module: SPA (front-end) <br />
Detected Build: 0.1.5.1 <br />
Summary: After unsuccessful authorization attempts, errors occur when trying to register. <br />
Description: As a guest, I attempt to log in but enter incorrect authentication data, resulting in an error. After that, I close the authorization window and WITHOUT refreshing the page, I open the registration window. Before it opens, there is some loading process, after which it displays an error.<br />
Steps to Replicate: <br />
  1) Open start page as a guest<br />
  2) Open login modal and send incorrect authentication data<br />
  3) Close login modal and open registration modal<br />
AR: Before reg modal opens, there is some loading process, after which it displays an error.<br />
ER: Reg modal opens without loading process and error.<br />
Attachmets: <br />
  ![image](https://github.com/VadHane/labs_302/assets/65092760/41ba568c-9f0f-48b2-bc33-c67153b3810c)<br />
  ![image](https://github.com/VadHane/labs_302/assets/65092760/0ddecc86-d078-4bed-8ae2-8e4bf3b03d95)<br />
  
Remarks: -<br />
Defect Probability: High.<br />
Defect Severity: Major.<br />
Defect Priority: High.<br />
Reported By: QA team<br />
Assigned To: Dev team<br />
Status: OPEN (NEW)<br />
Fixed Build Version: -<br />

<br /><br /><br /><br />
Case 2:

ID: 2<br />
Project: Education Project<br />
Product: AutoHUB<br />
Release Version: 1.0<br />
Module: SPA (front-end)<br />
Detected Build: 0.1.5.1<br />
Summary: Incorrect sizes of elements.<br />
Description: As an administrator, I access the user page and open a modal window to edit user information. When attempting to create a new role for the user, there is a text message and a confirmation button with different sizes that are visually inconsistent.<br />
Steps to Replicate: <br />
  1) Log in as admin<br />
  2) Open 'user' page<br />
  3) Open edit modal for any user<br />
  4) Try to type a random symbols into field for role<br />
AR: There are elements with incorrect size.<br />
ER: There are alements whose have got a same size.<br />
Attachmets: <br />
  ![image](https://github.com/VadHane/labs_302/assets/65092760/05ef5b84-4b27-40c9-9480-138a6068a1e3)<br />
  
Remarks: -<br />
Defect Probability: Low<br />
Defect Severity: Trivial.<br />
Defect Priority: Low<br />
Reported By: QA team<br />
Assigned To: Dev team<br />
Status: OPEN (NEW)<br />
Fixed Build Version: -<br />
