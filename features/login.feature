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
    Then I should see an error message for "Name" field

  Scenario: Verify Error message for DOB field
    Given I am on the registration page
    When I click on the Next button
    And I enter the name
    And I select Female as Gender Type
    When I click on the Next button
    Then I should see an error message for "Name" field

  Scenario: Verify Error message for email field
    Given I am on the registration page
    When I click on the Next button
    And I enter the name
    And I select Female as Gender Type
    And I input "04/04/1990" as DOB
    When I click on the Next button
    Then I should see an error message for "Name" field

    Scenario: Verify Error message for Invalid email field
    Given I am on the registration page
    When I click on the Next button
    And I enter the name
    And I select Female as Gender Type
    And I input "04/04/1990" as DOB
    And I enter sunil.kundu email address
    When I click on the Next button
    Then I should see "Geef een geldig e-mailadres op" error message
