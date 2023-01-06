interface IDbServiceProdOptions {
  uri?: string;
}

interface IDbServiceLocalOptions {
  database?: string;
  username?: string;
  password?: string;
}

export type DatabaseServiceOptions = IDbServiceProdOptions & IDbServiceLocalOptions;