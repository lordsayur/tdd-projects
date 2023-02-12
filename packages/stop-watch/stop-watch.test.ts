import { describe, test, expect } from "vitest";
import { StopWatch } from "./main";

describe("StopWatch", () => {
  test("should set current state to Running on start", () => {
    // Arrange
    const stopWatch = new StopWatch();

    // Act
    stopWatch.start();

    // Assert
    expect(stopWatch.currentState).toBe("Running");
    stopWatch.stop();
  });

  test("should set current state to Stop on Stop", () => {
    // Arrange
    const stopWatch = new StopWatch();

    // Act
    stopWatch.start();
    stopWatch.stop();

    // Assert
    expect(stopWatch.currentState).toBe("Stopped");
  });

  test("should increase watch on start", async () => {
    // Arrange
    const stopWatch = new StopWatch();

    // Act
    stopWatch.start();
    await sleep(1);
    stopWatch.stop();

    // Assert
    expect(stopWatch.currentWatch).greaterThan(0);
  });

  test("should stop watch on stop", async () => {
    // Arrange
    const stopWatch = new StopWatch();

    // Act
    stopWatch.start();
    await sleep(1);
    stopWatch.stop();
    const watch1 = stopWatch.currentWatch;
    await sleep(1);
    const watch2 = stopWatch.currentWatch;

    // Assert
    expect(watch1).toBe(watch2);
  });

  test("should continue watch on start", async () => {
    // Arrange
    const stopWatch = new StopWatch();

    // Act
    stopWatch.start();
    await sleep(1);
    stopWatch.stop();
    const watch1 = stopWatch.currentWatch;

    stopWatch.start();
    await sleep(1);
    stopWatch.stop();
    const watch2 = stopWatch.currentWatch;

    // Assert
    expect(watch1).toBeLessThan(watch2);
  });

  test("should reset watch on reset", async () => {
    // Arrange
    const stopWatch = new StopWatch();

    // Act
    stopWatch.start();
    await sleep(1);
    stopWatch.reset();

    // Assert
    expect(stopWatch.currentState).toBe("Stopped");
    expect(stopWatch.currentWatch).toBe(0);
  });
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
