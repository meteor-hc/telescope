import { Template } from 'meteor/templating'
import { Posts } from '/imports/api/posts.js'
import './posts_list.html'
import './post_item.js'

Template.postsList.helpers({
  posts: Posts.find()
})
