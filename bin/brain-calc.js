#!/usr/bin/env node

import calc from '../games/calc.js';
import Logic from '../src/index.js';

const name = Logic.prototype.greetingUser();
calc(name);
