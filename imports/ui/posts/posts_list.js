import { Template } from 'meteor/templating'
import './posts_list.html'
import './post_item.js'

const postsData = [
  {
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/'
  },
  {
    title: 'Meteor',
    url: 'http://meteor.com'
  },
  {
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com'
  }
]
Template.postsList.helpers({
  posts: postsData
})
