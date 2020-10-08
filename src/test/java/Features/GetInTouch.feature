Feature: TU Get In Touch Registration
    User is able to land on Get In Touch page.

Scenario Outline: TU Get In Touch Registration in valid credentials
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
  | amir | automation | getintouchsmokeaa@gmail.com | pak123 |
  #| amir | automation | getintouchsmoke992@gmail.com | pak123 |
  #| amir | automation | getintouchsmoke23@gmail.com | pak123 |
  #| amir | automation | getintouchsmoke24@gmail.com | pak123 |
  #| amir | automation | getintouchsmoke25@gmail.com | pak123 |
  #| amir | automation | getintouchsmoke26@gmail.com | pak123 |
  #| amir | automation | getintouchsmoke27@gmail.com | pak123 |
  #| amir | automation | getintouchsmoke28@gmail.com | pak123 |
  #| amir | automation | getintouchsmoke29@gmail.com | pak123 |
  #| amir | automation | getintouchsmoke301@gmail.com | pak123 |