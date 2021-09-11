#!/usr/bin/env node

import Logic from '../src/index.js';
import progression from '../games/progression.js';

const name = Logic.prototype.greetingUser();
progression(name);
