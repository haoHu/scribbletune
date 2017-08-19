'use strict';

const scribble = require('../src/');
scribble.setMiddleC(6);
let clip = scribble.clip({
	notes: ['CMaj'],
	pattern: 'x' + '_'.repeat(15)
});  

scribble.midi(clip);

