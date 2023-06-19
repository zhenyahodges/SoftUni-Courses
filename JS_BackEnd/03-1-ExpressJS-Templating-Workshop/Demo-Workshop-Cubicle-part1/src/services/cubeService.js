const fs = require('fs/promises');
const path = require('path');
const cubes = require('../db.json');

exports.save = (cube) => {
    // cubes.push(cube);
    // add the id:
    cubes.push({ id: cubes.length, ...cube });

    // (json formatting)
    let textData = JSON.stringify(cubes, '', 4);
    return fs.writeFile(path.resolve('src', 'db.json'), textData, {
        encoding: 'utf-8',
    });
};

exports.getOne = (cubeId) => cubes[cubeId];

exports.getAll = (search = '', fromInput, toInput) => {
    const from = Number(fromInput) || 0;
    const to = Number(toInput) || 6;

    const result = cubes
        .filter((x) =>
            x.name.toLowerCase().includes(search?.toLowerCase() || '')
        )
        .filter((x) => x.difficultyLevel >= from && x.difficultyLevel <= to);
    return result;
};
