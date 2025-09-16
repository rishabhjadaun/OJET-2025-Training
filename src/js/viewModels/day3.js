/**
 * @license
 * Copyright (c) 2014, 2025, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your dashboard ViewModel code goes here
 */
define([
  "../accUtils",
  "knockout",
  "ojs/ojhtmlutils",
  "ojs/ojarraydataprovider",
  "oj-c/checkbox",
  "ojs/ojinputtext",
  "ojs/ojbutton",
  "ojs/ojcollapsible",
  "ojs/ojdrawerlayout", "ojs/ojbutton", "ojs/ojnavigationlist",
  "ojs/ojbinddom",
  "ojs/ojbootstrap"
], function (accUtils, ko, htmlUtils, ArrayDataProvider) {
  function DashboardViewModel() {
    this.value = ko.observable("");

    this.startOpened = ko.observable(false);

    this.startToggle = () => {
      this.startOpened(!this.startOpened()); // toggle
    }

    this.pStr = '<p>This is bind DOM</p>';
    this.config = {
      view: htmlUtils.stringToNodeArray(this.pStr),
        data: {
            // inputId1: 'text-input1',
            // value: 'Enter something'
        }
    }

    this.message = ko.observable("");

    this.clickListener1 = (_, data) => {
      data.message('oj btn is clicked')
      this.showAnotherValue(!this.showAnotherValue()); // toggle
    }

    this.clicklistener2 = (_, data) => {
      data.message('html btn is clicked')
    }

    this.showAnotherValue = ko.observable(false);

    this.myColor = "blue";
    this.userIdCount = 0;
              this.users = ko.observableArray([
                  {
                      name: 'Aaryan'
                  },
                  {
                      name: 'Arush'
                  },
                  {
                      name: 'Kirti'
                  }
              ]);
              this.dataProvider = new ArrayDataProvider(this.users, {
                  keyAttributes: 'name'
              });
              this.removeUser = (event, current, bindingContext) => {
                  this.users.remove(current.data);
              };
              this.addUser = () => {
                  this.users.push({
                      name: 'User ' + this.userIdCount++
                  });
              };

    this.submitname = (event) => {
      console.log(this.value());
    };
    // Below are a set of the ViewModel methods invoked by the oj-module component.
    // Please reference the oj-module jsDoc for additional information.

    /**
     * Optional ViewModel method invoked after the View is inserted into the
     * document DOM.  The application can put logic that requires the DOM being
     * attached here.
     * This method might be called multiple times - after the View is created
     * and inserted into the DOM and after the View is reconnected
     * after being disconnected.
     */
    this.connected = () => {
      accUtils.announce("Dashboard page loaded.", "assertive");
      document.title = "Dashboard";
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
  return DashboardViewModel;
});