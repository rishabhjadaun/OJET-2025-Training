/**
 * @license
 * Copyright (c) 2014, 2025, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your customer ViewModel code goes here
 */
define(['../accUtils', 'knockout',
  'ojs/ojinputtext',   // dependency for oj-input-text
  'ojs/ojbutton'],
  function (accUtils, ko) {
    function CustomerViewModel() {
      var self = this;

      self.userName = ko.observable("");

      self.isButtonDisabled = ko.computed(function () {
        return !self.userName() || self.userName().trim().length === 0;
      });

      self.submitForm = function () {
        console.log("Submit button clicked. Name:", self.userName());
        alert("Hello " + self.userName());
        self.userName("");
      };
      
      this.connected = () => {
        accUtils.announce('Customers page loaded.', 'assertive');
        document.title = "Assignment3";
        // Implement further logic if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      this.disconnected = () => {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      this.transitionCompleted = () => {
        // Implement if needed
      };
    }

    /*
     * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
     * return a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.
     */
    return CustomerViewModel;
  }
);
