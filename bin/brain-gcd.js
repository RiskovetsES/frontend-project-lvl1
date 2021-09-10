#!/usr/bin/env node
import Logic from '../src/index.js';
import gcd from '../games/gcd.js';

const name = Logic.prototype.greetingUser();
gcd(name);
