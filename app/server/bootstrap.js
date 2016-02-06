Meteor.startup(function () {

// login with meteor developer accounts oauth
  ServiceConfiguration.configurations.upsert(
  { service: "meteor-developer" },
  {
    $set: {
      clientId: process.env["ACCOUNTS_METEOR_ID"], // either notation works
      secret: process.env.ACCOUNTS_METEOR_SECRET,
      loginStyle: "popup"
    }
  }
);

});
