/*
A palavra-chave "export" é usada para exportar a classe Player, permitindo que ela seja importada e utilizada em outros arquivos do projeto. 
A palavra-chave "class" é usada para definir uma classe em TypeScrip.,
*/

export class Player {
    //ATRIBUTOS DA CLASSE PLAYER
    /*A palavra-chave "public" é usada para declarar propriedades públicas da classe, que podem ser acessadas de fora da classe.*/
    public name: string; //nome do player (texto)
    public health: number; //a saúde do player (número)
    public level: number; //o nível do player (número)

    //CONSTRUTOR DA CLASSE PLAYER
    /*O construtor é um método especial que é chamado quando uma nova instância da classe é criada.*/
    constructor(name: string, health: number = 100, level: number = 1) {
        /* A palavra-chave "this" é usada para se referir à instância atual da classe. Ou seja: "Pegue o atributo 'health' da classe Player e atribua o valor de 'health' = 100 a ele".*/
        this.name = name; // Inicializa o nome do player
        this.health = health; // Inicializa a saúde do player
        this.level = level; // Inicializa o nível do player
    }

    //MÉTODOS DA CLASSE PLAYER
    /*Métodos são funções que pertencem a uma classe e podem ser chamadas em instâncias dessa classe.*/
    //O método "attack" é usado para atacar outro player, reduzindo sua saúde.
    public attack(): string {
        // Calcula o dano com base no nível do player
        const damage = this.level * 10; 
        /* A palavra-chave "return" é usada para retornar um valor de uma função ou método.*/
        return `O player ${this.name} atacou e causou ${damage} de dano!`;
    }

    /* O método "takeDamage" é usado para receber dano de outro player, reduzindo a saúde do player. */
    public takeDamage(damage: number): string {
        //Reduz a saúde do player com base no dano recebido
        this.health -= damage;
        //Verifica se a saúde do player caiu para 0 ou menos
        if (this.health <= 0) {
            this.health = 0; //Garante que a saúde não esteja negativa
            return `O player ${this.name} foi derrotado!`;
        }
        return `O player ${this.name} recebeu ${damage} de dano e agora tem ${this.health} de saúde.`;
    }
}