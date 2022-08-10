
Feature:Myer Create Account with an invalid email address

    Scenario: Warning for User when entering an invalid email address
    Given I am on URL "join"
    And I should see the text box for the EMAIL ADDRESS
    When I enter an email address "111"
    And I click the JOIN button
    Then I should see the warning text "Please enter a valid email address"


    Scenario: User create account with a valid email address not registered
    Given I am on URL "join"
    When I enter an email address "joanwangbuptTest@gmail.com"
    And I click the JOIN button
    Then I should see the CREATE ACCOUNT button
    And I enter the PASSWORD "Pass12345"
    And I enter the FIRST NAME "Joan"
    And I enter the LAST NAME "Wang"
    And I enter the MOBILE NUMBER "0478123456"
    And I enter the DATE OF BIRTH "01012000"
    And I enter the ADDRESS FINDER "3 Lindwall Street, UPPER MOUNT GRAVATT  QLD 4122"
    And I choose the standard address
    And I click the CREATE ACCOUNT button
    And I will be logged in

    Scenario: User create account with a valid email address registered
    Given I am on URL "join"
    When I enter an email address "joanwangbupt2@gmail.com"
    And I click the JOIN button
    Then I should see the CREATE ACCOUNT button
    And I enter the PASSWORD "Pass12345"
    And I enter the FIRST NAME "Joan"
    And I enter the LAST NAME "Wang"
    And I enter the MOBILE NUMBER "0478123456"
    And I enter the DATE OF BIRTH "01012000"
    And I enter the ADDRESS FINDER "3 Lindwall Street, UPPER MOUNT GRAVATT  QLD 4122"
    And I choose the standard address
    And I click the CREATE ACCOUNT button
    Then I should see the warning text "You already have an account"
