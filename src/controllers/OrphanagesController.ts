import {Request, Response} from 'express';
import {getRepository} from 'typeorm';

import Orphanages from '../models/Orphanage';
import orphanageView from '../views/orphanagesView';

export default {
  async index(req: Request, res:Response) {
    const orphanagesRepository = getRepository(Orphanages);
    const orphanages = await orphanagesRepository.find({
      relations: ['images']
    });

    return res.status(200).json(orphanageView.renderMany(orphanages));
  },

  async show(req: Request, res:Response) {
    const { id } = req.params;
    const orphanagesRepository = getRepository(Orphanages);
    const orphanage = await orphanagesRepository.findOneOrFail(id,{
      relations: ['images']
    });

    return res.status(200).json(orphanageView.render(orphanage));
  },


  async create(req: Request,res: Response) {
    const {
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends
    } = req.body;

    const orphanagesRepository = getRepository(Orphanages);

    const reqImages = req.files as Express.Multer.File[];
    const images = reqImages.map( image => {
      return { path: image.filename }
    })

    const orphanage = orphanagesRepository.create({
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends,
        images
    });

    await orphanagesRepository.save(orphanage);


    return res.status(201).json({orphanage})
  }
}
