'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 *
 * transformStateWithClones()
 */
function transformStateWithClones(state, actions) {
  const result = [];

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        result.push(addProperties(state, action.extraData));
        break;

      case 'removeProperties':
        result.push(removeProperties(state, action.keysToRemove));
        break;

      case 'clear':
        result.push(clear(state));
        break;
    }
  }

  return result;
}

function addProperties(state, extraData) {
  const stateA = {};

  Object.assign(stateA, state, extraData);

  return stateA;
}

function removeProperties(state, keysToRemove) {
  /* const stateB = {};

  for (const key of keysToRemove) {
    delete state[key];
  }

  Object.assign(stateB, state);

  return stateB; */

  const stateB = { ...state };

  for (const key of keysToRemove) {
    delete stateB[key];
  }

  return stateB;
}

function clear(state) {
  const emptyObject = {};

  return emptyObject;
}

module.exports = transformStateWithClones;
