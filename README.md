This application uses Iron Meteor on MongoDB to scaffold
Single Page Applications on Node.js. The previous apps used Gulp
as a task runner to create Front End Application to be dropped on
a WordPress instance, via the clients preferences. This is meant to
be stand-alone as a Node or Meteor application.

The purposes of both types of apps are different. The former is to
hand off the application to a back-end and is not round-trippable as such.
It requires either refactoring by hand or an API to make it to the back-end
layer. However, it is portable to any CMS and deployment schema.

The Meteor app by contrast is self-sufficient and prêt-à-porter, but
requires deployment on either a Node.js or Meteor.js server. This obviously
will become more commonly available in the future.

What I hope to achieve with these two projects are clear design patterns
on which to base extensible modular applications. The first accommodates
pre-existing and legacy server-side scripting; the second is isomorphic
JavaScript. Using an IdevE provides much more of a clear shot from a SPA
to an enterprise level application and massively reduces the code overhead.

My exercise in OOP makes it easier to build out a project, focusing on
modularity, encapsulation, abstracting away dead-end patterns. I intend
to use Meteor much more in the future, possibly with Angular.

As ECMA6 gets underway I may explore the pseudo 'class', but as Crockford
has repeatedly pointed out, it may be better to not obscure the fact
that JavaScript uses prototypical inheritance.

A note on procedure. I am reverse engineering a number of snazzy applications
along the way and putting them together in order to see if I end up where I
think I'm going to (probably not); nonetheless, it so far is pretty interesting.
