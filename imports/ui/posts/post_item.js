import { Template } from 'meteor/templating'
import './post_item.html'

Template.postItem.helpers({
  domain: () => {
    const post = Template.instance().data
    const a = document.createElement('a')
    a.href = post.url
    return a.hostname
  }
})
