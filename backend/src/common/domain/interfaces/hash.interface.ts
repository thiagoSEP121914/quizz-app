export const HASH_SERVICE_TOKEN = Symbol("IHashService");

export interface IHashService {
  hash(data: string): Promise<string>;
  compare(data: string, encrypted: string): Promise<boolean>;
}
