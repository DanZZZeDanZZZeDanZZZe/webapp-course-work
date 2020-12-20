Feature: Project features

  Scenario: Check registration page
    Given I go to the regestration page by path "http://localhost:3001/authorization"
    When click to header link with xpath "//a[text() = 'Registration']"
    Then I get to the registration page by path "http://localhost:3001/registration"

  Scenario: Go to the authorization page
    Given I go to the authorization page by path "http://localhost:3001/authorization"
    When I login with user "tester4@gmail.com" and user "abc1243we423" password
    And press to login button
    Then I get to the calendar page by path "http://localhost:3001/calendar"

  Scenario: Log out at application
    Given I go to the calendar page by path "http://localhost:3001/calendar"
    When click to header button with xpath "//button[text() = 'Log out']"
    Then I get to the authorization page by path "http://localhost:3001/authorization"

