Feature: My Account Login
Description: Testing the account login feature

#Simple login without parameters
#Scenario: Log-In with valid username and password
#Given Open Browser
#When Enter the url "http://practice.automationtesting.in/"
#And Click on My Account Menu
#And Enter registered Username and Password
#And Click on Login button
#Then User must be logged in successfully

#Simple login without parameters
#Scenario: Log-In with valid username and password
#Given Open Browser
#When Enter the url "http://practice.automationtesting.in/"
#And Click on My Account Menu
#And Enter registered Username "rkiran33@yahoo.co.in" and Password "Jsm@3343"
#And Click on Login button
#Then User must be logged in successfully

#Simple login without parameters
#Scenario Outline: Log-In with valid username and password
#Given Open Browser
#When Enter the url "http://practice.automationtesting.in/"
#And Click on My Account Menu
#And Enter registered Username "<username>" and Password "<password>"
#And Click on Login button
#Then Verify Login

#Examples:
 # |	username				|	password	|
 # |	rkiran33@yahoo.co.in	|	jsm3343		|
 # |	rkiran33@yahoo.co.in	|	Jsm@3343	|
 # |	rkiran33@yahoo.co.in	|	jsm33432	|

#Scenario: Log-In with valid username and password
#Given Open Browser
#When Enter the url "http://practice.automationtesting.in/"
#And Click on My Account Menu
#And Enter registered Username and Password
#|	rkiran33@yahoo.co.in	|	Jsm@3343	|
#And Click on Login button
#Then User must be logged in successfully

Scenario: Log-In with valid username and password
Given Open Browser
When Enter the url "http://practice.automationtesting.in/"
And Click on My Account Menu
And Enter registered Username and Password
|	username				|	password	|
|	rkiran33@yahoo.co.in	|	Jsm@3343	|
And Click on Login button
Then User must be logged in successfully


