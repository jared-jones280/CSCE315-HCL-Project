var Twit = require('twit')
var fs = require("fs")
var keys = require("./TwitterAccess")

var twitHandle = new Twit(keys)

module.exports = {
   twitHandle
}

