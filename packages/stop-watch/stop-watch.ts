export class StopWatch {
  private watch: number = 0;
  private state: StopWatchState = "Stopped";
  private watchCounter;

  constructor() {}

  get currentState() {
    return this.state;
  }

  get currentWatch() {
    return this.watch;
  }

  public start() {
    this.state = "Running";
    this.watchCounter = setInterval(() => {
      this.watch++;
    }, 1);
  }

  public stop() {
    this.state = "Stopped";
    clearInterval(this.watchCounter);
  }

  public reset() {
    this.stop();
    this.watch = 0;
  }
}

export type StopWatchState = "Running" | "Stopped";
