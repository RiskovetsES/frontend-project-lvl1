#!/usr/bin/env node
import prime from '../games/prime.js';
import Logic from '../src/index.js';

const name = Logic.prototype.greetingUser();
prime(name);
