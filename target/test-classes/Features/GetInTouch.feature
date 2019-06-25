Feature: TU Get In Touch Registration

Scenario Outline: TU Get In Touch Registration
Given User Navigate to any profile
Then close agreepopup
Then Click on getintouch CTA button as logged out
Then user enter Firstname "<Fname>"
Then user enter Lastname "<Lname>"
Then user enter "<Email>" and "<Password>" 
Then user check the QS Leap checkbox as yes
Then user check the third party checkbox as yes
And user press JoinUs button
And close LG form
#Then select study level as Bachelor
#Then select subjects from dropdown
#Then select study destinations
#Then change country of residence
#Then enter phone number
#Then press Get In Touch CTA button
#Then Get title of the page
#Then hover on user profile for logout
#Then press Logout button
And close the browser

Examples:
  | Fname | Lname | Email | Password |
  | amir | automation | getintouch601@gmail.com | pak123 |
  | amir | automation | getintouch602@gmail.com | pak123 |
  | amir | automation | getintouch603@gmail.com | pak123 |
  | amir | automation | getintouch604@gmail.com | pak123 |
  | amir | automation | getintouch605@gmail.com | pak123 |
  | amir | automation | getintouch606@gmail.com | pak123 |
  | amir | automation | getintouch607@gmail.com | pak123 |
  | amir | automation | getintouch608@gmail.com | pak123 |
  | amir | automation | getintouch609@gmail.com | pak123 |
  | amir | automation | getintouch400@gmail.com | pak123 |