#!/usr/bin/env node

import even from '../games/even.js';
import Logic from '../src/index.js';

const name = Logic.prototype.greetingUser();
even(name);
