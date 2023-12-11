/**
 * Global functions & variables that can be used anywhere in the app
 */
export const useGlobals = () => {
  /**
   *  A fake promise that resolves after a given time
   * @param time The time in milliseconds to wait before resolving the promise
   */
  const fakePromise = (time: number = 2500) => new Promise((resolve) => setTimeout(resolve, time));
  return {
    fakePromise,
  };
};
