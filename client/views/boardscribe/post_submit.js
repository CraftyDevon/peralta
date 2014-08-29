Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var post = {

      title: $(e.target).find('[name=title]').val(),
            teaser: $(e.target).find('[name=teaser]').val(),

      postcontent: $(e.target).find('[name=postcontent]').val()
    }

    Meteor.call('post', post, function(error, id) {
      if (error)
        return alert(error.reason);

      Router.go('postPage', {_id: id});
    });
  }
});