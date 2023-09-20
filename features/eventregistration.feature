
@sunilk
Feature: Event Registration

  Scenario: Verify user is able to register for an event successfully
    Given I am on the registration page
    When I click on the Next button
    And I enter the name
    And I select Female as Gender Type
    And I input "04/04/1990" as DOB
    And I enter sunil.kundu@gmail.com email address
    And I enter organization name
    When I click on the Next button
    When I select Tuesday as day to attend
    And I enter 10 hour and 10 minute in Available from
    And I enter 20 hour and 20 minute in Available to
    And I select "Vegan" as Dietary restrictions
    And I check yes
    And I click on the Submit button
    Then I should see the text "We have received your registration."

  Scenario: Verify Error message for Name field
    Given I am on the registration page
    When I click on the Next button
    When I click on the Next button
    Then I should see an error message for "Name" field

  Scenario: Verify Error message for Gender field
    Given I am on the registration page
    When I click on the Next button
    And I enter the name
    When I click on the Next button
    Then I should see an error message for "Gender" field

  Scenario: Verify Error message for DOB field
    Given I am on the registration page
    When I click on the Next button
    And I enter the name
    And I select Female as Gender Type
    When I click on the Next button
    Then I should see an error message for "DOB" field

  Scenario: Verify Error message for email field
    Given I am on the registration page
    When I click on the Next button
    And I enter the name
    And I select Female as Gender Type
    And I input "04/04/1990" as DOB
    When I click on the Next button
    Then I should see an error message for "email" field

  Scenario: Verify Error message for Invalid email field
    Given I am on the registration page
    When I click on the Next button
    And I enter the name
    And I select Female as Gender Type
    And I input "04/04/1990" as DOB
    And I enter sunil.kundu email address
    When I click on the Next button
    Then I should see "Must be a valid email address" error message

  Scenario: Verify user is able to clear the page using clear button and a dialog box displays
    Given I am on the registration page
    When I click on the Next button
    And I enter the name
    And I select Female as Gender Type
    And I input "04/04/1990" as DOB
    And I enter sunil.kundu@gmail.com email address
    And I enter organization name
    And I click on the Clear form button
    Then I should see Clear form dialog box
    Then I should see the text "This will remove your answers from all questions and cannot be undone."
    And I click on clear from button present in Clear form dialog
    Then I should see the text "Event Address: 123 Your Street Your City, ST 12345"

  Scenario: verify User lands on previous page after clicking on back button
    Given I am on the registration page
    When I click on the Next button
    And I enter the name
    And I select Female as Gender Type
    And I input "04/04/1990" as DOB
    And I enter sunil.kundu@gmail.com email address
    And I enter organization name
    When I click on the Next button
    When I click on the Back button
    Then I should land on "Personal Information" page
