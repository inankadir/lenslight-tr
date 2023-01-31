import Photo from "../models/photoModel.js";

const create = (req, res) => {
  const photo = Photo.create(req.body);
  res.status(201).json({
    succeeded: true,
    photo,
  });
};

export { createPhoto };
