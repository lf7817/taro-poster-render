export default class Logger {
  constructor(private readonly debug: boolean) {}

  public info = (message?: any, ...optionalParams: any[]) => {
    if (this.debug) {
      console.info(message, ...optionalParams);
    }
  };

  public time = (message: string) => {
    if (this.debug) {
      console.time(message);
    }
  };

  public timeEnd = (message: string) => {
    if (this.debug) {
      console.timeEnd(message);
    }
  };
}
