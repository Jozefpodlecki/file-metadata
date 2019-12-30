import homeController from './../controllers/home'
import getFileInfo from './../controllers/fileanalyse'

import * as multer from 'multer';
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

export default (app: any) => {
  app.post("/api/fileanalyse", upload.single('file'), getFileInfo);
  app.get("/", homeController.get);
}