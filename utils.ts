import { readdirSync, PathLike } from 'fs';
import { resolve } from 'path';

export const listDir = (dir: PathLike): PathLike[] => {
    return readdirSync(dir).map(file => resolve(String(dir), file))
}