const fs = require('fs/promises');
const path = require('path');

const Cube=require('../models/Cube')


exports.getOne = (cubeId) => Cube.findById(cubeId);

exports.getAll = (search = '', fromInput, toInput) => {
    // const from = Number(fromInput) || 0;
    // const to = Number(toInput) || 6;
    
    // const result = cubes
    //     .filter((x) =>
    //         x.name.toLowerCase().includes(search?.toLowerCase() || '')
    //     )
    //     .filter((x) => x.difficultyLevel >= from && x.difficultyLevel <= to);
    // return result;
    return [];
};

exports.create = (cube) => Cube.create(cube);