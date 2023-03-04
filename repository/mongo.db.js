import mongoose from 'mongoose';

async function connect(){
  const uri = "mongodb+srv://psgomesbh:pg272523@cluster1.gkh7p0j.mongodb.net/?retryWrites=true&w=majority";
  return await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
}

export  {
    connect,
}
