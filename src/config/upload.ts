import path from "path";
import multer, { type StorageEngine } from 'multer' // o multer der erro instalar a biblioteca assim:npm install --save-dev @types/multer # ou se usar yarn: yarn add -D @types/multer
import crypto from 'crypto'
import { config } from "dotenv";

interface IuploadConfig {
  directory: string
  storage: StorageEngine
}

const uploadFolder = path.resolve(__dirname, '..', '..', 'uploads')

export default {
  directory:uploadFolder,
  storage: multer.diskStorage({
    destination: uploadFolder, filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('hex')
      const filename = `${fileHash}-${file.originalname}`
      callback(null,filename)
    }
  })
} as IuploadConfig