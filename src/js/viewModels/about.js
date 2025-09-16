define(['../accUtils','ojs/ojcore', 'knockout', 'ojs/ojbootstrap'], 
  function (accUtils, oj, ko, Bootstrap) {
    function TextBindingViewModel() {
      var self = this;

      // Observable message to bind in the view
      self.greetingMessage = ko.observable("Hello, welcome to Oracle JET!");

      this.connected = () => {
        accUtils.announce('Incidents page loaded.', 'assertive');
        document.title = "Assignment1";
        // Implement further logic if needed
      };
    }

    return TextBindingViewModel;
});
