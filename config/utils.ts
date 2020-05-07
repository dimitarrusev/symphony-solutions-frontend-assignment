import * as path from "path";

const resolve = (dirPath: string): string =>
  path.join(__dirname, "..", dirPath);

export { resolve };
