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
  | amir | automation | getintouchlive13@gmail.com | pak123 |
  | amir | automation | getintouchlive4@gmail.com | pak123 |
  | amir | automation | getintouchlive5@gmail.com | pak123 |
  | amir | automation | getintouchlive6@gmail.com | pak123 |
  | amir | automation | getintouchlive7@gmail.com | pak123 |
  | amir | automation | getintouchlive8@gmail.com | pak123 |
  | amir | automation | getintouchlive9@gmail.com | pak123 |
  | amir | automation | getintouchlive10@gmail.com | pak123 |
  | amir | automation | getintouchlive11@gmail.com | pak123 |
  | amir | automation | getintouchlive12@gmail.com | pak123 |