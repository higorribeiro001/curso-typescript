// Singleton (cria somente uma instancia de uma determinada classe) - GoF | Factory Method (metodo que cria novo objeto) - GoF
export class Database {
  static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string
  ) {}

  connect(): void {
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
  }

  static getDatabase(
    host: string,
    user: string,
    password: string
  ): Database {
    if (Database.database) {
      console.log('Retornando instância já criada.');
      return Database.database;
    }
    console.log('Criando nova instância.');
    Database.database = new Database(host, user, password);
    return Database.database
  }
}

// const db1 = new Database('localhost', 'root', '123456');
// db1.connect();

// const db2 = new Database('localhost', 'root', '123456');
// db2.connect();

// console.log(db1 === db2);

const db1 = Database.getDatabase('localhost', 'root', '123456');
db1.connect();

const db2 = Database.getDatabase('localhost', 'root', '123456');
db2.connect();

// por usarem a mesma instancia, irá identificar que uma instancia ja foi criada anteriormente
