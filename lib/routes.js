Router.configure({
  layoutTemplate: 'Layout'
});

Router.route('/', function () {
  this.render('Home');
});

Router.route('/profile', function () {
  this.render('Profile');
  this.render('HomeButton', { to: 'LeftHeader'} );
});
