# Jasmine Promise Examples

Javascript applications can contain lots of asynchronous code that is hard to test.
Promises that are chained together to create a seemless user experience.
This however is a pain in the but to write tests for and can allow you to create
false positive tests.

## Sample Dungeon App

This repo has a sample dungeon application that has a simple life cycle

```
Start game --> Load Dungeon --> Load Player
```

The dungeon and player are classes that are responsible for loading instances of themselves.
The idea being the data could be loading from an API then the data is used for instantiation.

The main loop of the application is the `startGame` function found in `index.js`.
The loading of the dungeon and the player are meant to be synchronously called.
The dungeon will load then the player will load after the dungeon has been loaded.

## Passing when it should be failing

The specs are currently in a state where the `index.spec.js` test should be failing.
There are `console.log` statements that print out the `results` object is undefined.
Yet the spec passes.


### Sample output of the specs being run:

```
ℹ ｢wdm｣: Compiling...
ℹ ｢wdm｣: Hash: 84a29da5f1cd328bb292
Version: webpack 4.43.0
Time: 12ms
Built at: 05/03/2020 4:41:30 PM
             Asset      Size           Chunks             Chunk Names
src/Player.spec.js     5 KiB  src/Player.spec             src/Player.spec
 src/index.spec.js  7.88 KiB   src/index.spec  [emitted]  src/index.spec
Entrypoint src/index.spec = src/index.spec.js
Entrypoint src/Player.spec = src/Player.spec.js
[./src/Dungeon.js] 377 bytes {src/index.spec}
[./src/Player.js] 326 bytes {src/index.spec} {src/Player.spec}
[./src/Player.spec.js] 385 bytes {src/Player.spec}
[./src/Store.js] 220 bytes {src/index.spec}
[./src/index.js] 971 bytes {src/index.spec} [built]
[./src/index.spec.js] 384 bytes {src/index.spec}
ℹ ｢wdm｣: Compiled successfully.
LOG: 'the game', Promise{}
LOG: 'testing', undefined
Chrome Headless 81.0.4044.129 (Mac OS 10.13.6): Executed 2 of 2 SUCCESS (0.007 secs / 0.004 secs)
TOTAL: 2 SUCCESS
TOTAL: 2 SUCCESS
```
