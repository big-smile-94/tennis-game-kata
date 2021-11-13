import tennisGameScenarios from './scenarios/tennisGameScenarios';

describe('Tennis Game Kata', () => {
  tennisGameScenarios.forEach(({ description, actualScore, expectedScore }) => {
    test(description, () => expect(actualScore).toBe(expectedScore));
  });
});
