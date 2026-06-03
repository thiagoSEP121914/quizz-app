export interface SearchInput {
  page?: number;
  per_page?: number;
  sort_by?: string;
  sort_dir?: "asc" | "desc";
  filter?: string | null;
}

export interface SearchOutPut<Model> {
  items: Model[];
  per_page: number;
  total: number;
  current_page: number;
  sort: string | null;
  sort_dir: string | null;
  filter: string | null;
}

export interface IRepository<Model, Obj> {
  findAll(params: SearchInput): Promise<SearchOutPut<Model>>;

  findById(id: string): Promise<Model | null>;

  create(data: Obj): Model;

  insert(model: Model): Promise<Model>;

  update(id: string, model: Partial<Model>): Promise<Model | null>;

  delete(id: string): Promise<void>;
}
