import { FlowRouter } from 'meteor/kadira:flow-router'
import { BlazeLayout } from 'meteor/kadira:blaze-layout'

import '/imports/ui/layouts/body.js'
import '/imports/ui/pages/posts/posts_list.js'
import '/imports/ui/pages/not_found/not_found.js'

FlowRouter.route('/', {
  name: 'postsList',
  action: () =>
    BlazeLayout.render('layout', { main: 'postsList' })
})

FlowRouter.notFound = {
  action: () =>
    BlazeLayout.render('layout', { main: 'notFound' })
}
