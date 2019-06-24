Feature: TU Get In Touch Registration and Login

#Without Examples Keyword

#Scenario: TU Sign Up
#Given User open TU home page
#When user close agreepopup
#Then User hover on joinusfree popup
#Then user enter firstname
#Then user enter lastname
#Then user enter "amittesting@ao.com" and "pak123"
#Then user check the checkbox as yes
#Then user press create new account button
#Then close user information popup
#Then close alertbox
#Then Get title of the page
#Then hover on user profile for logout
#Then press Logout button
#And close the browser



#With Example Keyword  => Scenario would be Scenario Outline with example keyword => Data Driven Testing

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
  | amir | automation | getintouch58@gmail.com | pak123 |
  | amir | automation | getintouch76@gmail.com | pak123 |
#  | amir | automation | getintouch72@gmail.com | pak123 |
 # | amir | automation | getintouch73@gmail.com | pak123 |
#  | amir | automation | getintouch74@gmail.com | pak123 |
#  | amir | automation | getintouch75@gmail.com | pak123 |
#  | amir | automation | getintouch17@gmail.com | pak123 |
#  | amir | automation | getintouch18@gmail.com | pak123 |
#  | amir | automation | getintouch19@gmail.com | pak123 |
#  | amir | automation | getintouch20@gmail.com | pak123 |