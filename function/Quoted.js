const fs = require('fs');
const { serialize } = require("./Server");

const { type, quotedMsg } = serialize
const isImage = (type == 'imageMessage')
const isQuotedMsg = (type == 'extendedTextMessage')
const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
const isVideo = (type == 'videoMessage')
const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false

module.exports = { isImage, isQuotedMsg, isQuotedImage, isVideo, isQuotedVideo }