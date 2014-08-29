Router.configure({
    layoutTemplate: 'layout',
  waitOn: function() { return Meteor.subscribe('posts'); }
  });



Router.map(function() {

  this.route('home', {path: '/'});

   this.route('postPage', {
    layoutTemplate: 'post',

    path: '/posts/:_id',
    data: function() { return Posts.findOne(this.params._id); }
  });
   this.route('login', {
    layoutTemplate: 'admin',
        path: 'login',

  });
    this.route('postEdit', {
            layoutTemplate: 'admin',

    path: '/posts/:_id/edit',
    data: function() { return Posts.findOne(this.params._id); }
  });
   this.route('postSubmit', {
      layoutTemplate: 'admin',

    path: '/submit'
  });
    this.route('admin', {
        layoutTemplate: 'admin',

    path: '/admin'
  });

    this.route('postmanagement', {
          layoutTemplate: 'admin',

    path: '/postmanagement'
  });
    
});



var requireLogin = function(pause) {
  if (! Meteor.user()) {
    if (Meteor.loggingIn())
      this.render(this.loadingTemplate);
    else
      this.render('accessDenied');
    pause();
  }
}


Router.onAfterAction(function () {
    $(document).foundation(); // or single plugin
});



Router.onBeforeAction('loading');
Router.onBeforeAction(requireLogin, {only:['postSubmit', '/posts/:_id/edit', 'postmanagement']});

