const {uploadFile} = require("../services/storage-service");
const musicModel = require("../model/music-model");

const musicUpload = async(req,res)=>{
   //  console.log(req.body);

   if(!req.files){
    return res.status(402).json({
      messgae:"File not found.."
    })

   }
     try{
         const audio = req.files.audio[0]
         const coverImage = req.files.coverImage[0]
          const {title, artist} = req.body
        
       const audioResult = await uploadFile(audio.buffer.toString('base64'));
       const coverResult = await uploadFile(coverImage.buffer.toString('base64'));
      //console.log(result);
       const music = await musicModel.create({
          title,
          artist,
          uri:audioResult.url,
          coverImage:coverResult.url,
          uploadedBy:req.user.id
       })

       res.status(201).json({
          message:"Music create succesfully..",
          id : music._id,
          uri : music.uri,
          title : music.title,
          artist: music.artist,
       })

          
     }catch(error){
          console.log(error)
     };
     
}

const getAllMusic = async(req,res)=>{
  try{
  const musics = await musicModel
                              .find()
                              .sort({ createdAt: -1 })
                              .limit(10)
  //console.log(musics)
  res.status(200).json({
    message:"Musics fetch succesfully...",
    count: musics.length,
    musics
  })
}catch(error){
  return res.status(400).json({
    message:"Error to fetch musics.."
  })
 }
}

const getMusicById = async(req,res)=>{
  const id = req.params.id
  try{
    const music = await musicModel.findById(id)

    if(!music){
      return res.status(400).json({
        message:"Music not available"
      })
    }

    res.status(200).json({
      message:"Music fetch succesfully..",
      music
    })

  }catch(error){
    return res.status(400).json({
      message:"Error to fetch music"
    })
  }


}

const updateMusic = async (req,res)=>{
  const {id} = req.params
  const {artist, title} = req.body
  try{
  const updatedMusic = await musicModel.findOneAndUpdate(
    {_id:id},
    {
      artist:artist,
      title:title
  })

  if(!updatedMusic){
    return res(400).json({
      message:"music not found.."
    })
  }

  res.status(200).json({
    message:"updated music data succesfully..",
    
  })
  }catch(error){
    console.log(error)
    return res.status(400).json({
      message:"Error to update music data "
    })
  }
}

const deleteMusic = async(req,res)=>{
  const {id}= req.params
  try{
  const deletedMusic = await musicModel.findByIdAndDelete({_id:id}) 

  if(!deletedMusic){
    return res.status(404).json({
      message:"Music not found..."
    })
  }

  res.status(201).json({
    message:"Music deleted succesfully..",
    
  })
  }catch(error){
    return res.status(500).json({
      message:"Music not delete sever error occur"
    })
  }
}
module.exports = {musicUpload, getAllMusic, getMusicById, updateMusic, deleteMusic}