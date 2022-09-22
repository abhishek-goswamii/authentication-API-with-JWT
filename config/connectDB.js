import mongoose from "mongoose"

const connectDB  = async (databaseUrl) => {
  
    try {
    const DB_OPTIONS = {
        dbName:"apidb"
    }
    
    await mongoose.connect(databaseUrl,DB_OPTIONS)
    console.log(`connected successfully`)
    

  } catch (error) {
    console.log(error);
  }

}

export default connectDB