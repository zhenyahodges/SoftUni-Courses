const fs = require('fs/promises');
const path = require('path');
const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');

exports.getOneDetailed = (cubeId) =>
    Cube.findById(cubeId).populate('accessories');
exports.getOne = (cubeId) => Cube.findById(cubeId);

exports.getAll = async (search = '', fromInput, toInput) => {
    const from = Number(fromInput) || 0;
    const to = Number(toInput) || 6;

    // DB SEARCH-this is not working yet,see below
    // let cubes = await Cube.find({
    //     name: { $regex: new RegExp(search, 'i') },
    //     difficultyLevel: { $and: [{ $gte: from }, { $lte: to }] },
    // }).lean();
    let cubes = await Cube.find({
        name: { $regex: new RegExp(search, 'i') },
    })
        .where('difficultyLevel')
        .lte(to)
        .gte(from)
        .lean();

    return cubes;
};

exports.create = (cube) => Cube.create(cube);

exports.edit = (cubeId, cubeData) => Cube.findByIdAndUpdate(cubeId, cubeData);

exports.attachAccessory = async (cubeId, accessoryId) => {
    const cube = await Cube.findById(cubeId);
    const accessory = await Accessory.findById(accessoryId);

    cube.accessories.push(accessory);
    accessory.cubes.push(cube);

    await cube.save();
    await accessory.save();
    return cube;
};
