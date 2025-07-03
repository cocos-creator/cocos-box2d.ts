
const box2d = require('./build/box2d/box2d.umd');
let b2 = {};

const keepList_b2_ = ['b2_maxPolygonVertices', 'b2_maxAngularCorrection'];

for (var key in box2d) {
    if (keepList_b2_.indexOf(key) !== -1) {
        b2[key.slice('b2_'.length)] = box2d[key];
        continue;
    }
    if (key.indexOf('b2_') !== -1) {
        continue;
    }
    let newKey = key.replace('b2', '');
    b2[newKey] = box2d[key];
}

module.exports = b2;
