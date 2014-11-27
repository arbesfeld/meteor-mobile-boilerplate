Template.Profile.events({
  'click #sign-out': function () {
    Meteor.logout(function () {
      Router.go('/');
    });
  }
});