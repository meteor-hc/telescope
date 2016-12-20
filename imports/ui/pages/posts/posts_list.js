import { Template } from 'meteor/templating'
import { Posts } from '/imports/api/posts.js'
import { Meteor } from 'meteor/meteor'
import './posts_list.html'
import './post_item.js'

Template.postsList.onCreated(() => {
  Meteor.subscribe('posts')
})

Template.postsList.helpers({
  posts: Posts.find()
})
