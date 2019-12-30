export default (req, res) => {
  const { originalname, mimetype, size } = req.file
  
  res.json({
    name: originalname,
    type: mimetype,
    size: size
   });
}