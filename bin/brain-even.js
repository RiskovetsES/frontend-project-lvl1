#!/usr/bin/env node
import greetingUser from '../src/cli.js';
import brainEven from '../src/brainEven.js';

const name = greetingUser();
brainEven(name);
