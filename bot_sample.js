require('dotenv').config();
var Twitter = require('twitter');
var fs = require('fs');

var twitter = new Twitter({
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    access_token_key: process.env.access_token_key,
    access_token_secret: process.env.access_token_secret
});


var img = fs.readFileSync('./pic.png');
var media = {"media":img};

twitter.post('media/upload', media, (err, media, respose) => {
    if(err){
        return console.log(err)
    }else {
        return twitter.post('statuses/update', {status: "sample", media_ids: media.media_id_string}, (err, tweet, response)=>{
            if (err){
                return console.log(err);
            }else {
                return console.log(tweet);
            }
        });
    }
});
