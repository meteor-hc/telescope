import { Meteor } from 'meteor/meteor'
import { Posts } from '/imports/api/posts.js'

Meteor.startup(() => {

  if (Posts.find().count() === 0) {
    const data = [
      {
        title: 'Introducing Telescope',
        url: 'http://sachagreif.com/introducing-telescope/'
      }, {
        title: 'Meteor',
        url: 'http://meteor.com'
      }, {
        title: 'The Meteor Book',
        url: 'http://themeteorbook.com'
      }
    ]
    data.map(post => Posts.insert(post))
  }
})
