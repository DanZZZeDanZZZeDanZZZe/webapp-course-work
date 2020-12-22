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

  Scenario: Create new note
    Given I click on the add button for today
    When I add a title "Test"
    And I add a text "hello"
    And I add a time "20:30"
    And I press button with text "Create"
    Then I return to the page by path "http://localhost:3001/calendar"

  Scenario: Changing a note
    Given I click on my note with text "Test"
    When I add a new title " 2"
    And I press save button with text "Save"
    Then I see a new title with text "Test 2"

  Scenario: Data checking
    Given I click on new note with text "Test 2"
    When I check a title "Test 2"
    And I check a text "hello"
    And I check a time "20:30"
    Then I see that this is true

  Scenario: Deleting a new record
    Given I am on page by path "http://localhost:3001/note"
    When I press delete button with text "Delete"
    Then I see that there is no note with text "Test 2"

  Scenario: Return to calendar
    Given I open the form for adding a new record
    When click to header link button with xpath "//a[text() = 'Calendar']"
    Then I return to the calendar by path "http://localhost:3001/calendar"

  Scenario: Log out at application
    Given I go to the calendar page by path "http://localhost:3001/calendar"
    When click to header button with xpath "//button[text() = 'Log out']"
    Then I get to the authorization page by path "http://localhost:3001/authorization"

