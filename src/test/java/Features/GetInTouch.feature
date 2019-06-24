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
Then user press JoinUs button
Then select study level as Bachelor
Then select subjects from dropdown
Then select study destinations
Then change country of residence
Then enter phone number
Then press Get In Touch CTA button
#Then Get title of the page
#Then hover on user profile for logout
#Then press Logout button
And close the browser

Examples:
  | Fname | Lname | Email | Password |
  | amir | automation | getintouch105@gmail.com | pak123 |
 # | amir | automation | getintouch81@gmail.com | pak123 |
 # | amir | automation | getintouch82@gmail.com | pak123 |
 # | amir | automation | getintouch83@gmail.com | pak123 |
 # | amir | automation | getintouch84@gmail.com | pak123 |
 # | amir | automation | getintouch85@gmail.com | pak123 |
 # | amir | automation | getintouch86@gmail.com | pak123 |
 # | amir | automation | getintouch87@gmail.com | pak123 |
 # | amir | automation | getintouch88@gmail.com | pak123 |
 # | amir | automation | getintouch89@gmail.com | pak123 |