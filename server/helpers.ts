import { webpackMiddleware } from './webpack-middleware';

export function webpackReadFile(fileName: string): Promise<string | Buffer | undefined> {
  const fileAbsolutePath = webpackMiddleware.getFilenameFromUrl(`${fileName}`);

  if (fileAbsolutePath == null) {
    return Promise.reject(
      new Error(`Cannot find file: ${fileName}. Got ${fileAbsolutePath}`)
    );
  }

  return new Promise((resolve, reject) => {
    webpackMiddleware.context.outputFileSystem.readFile(
      fileAbsolutePath!,
      (err, file) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(file as Buffer);
      }
    );
  });
}
