const {ImageKit} = require('@imagekit/nodejs');

const imagekitClient = new ImageKit({
     privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})

const uploadFile =async (file)=>{
     const result = await imagekitClient.files.upload({
          file,
          fileName: "Music_" + Date.now() ,
          folder : "Vibe-Music"
     })
     return result
}

module.exports = {uploadFile}