/**
 * Classe da Mensagem.
 */

class Mensagem {

    static instancia = null;
    
    /**
     * Não é possível criar a instância da classe Mensagem com o construtor. Use o método estático getInstancia() em vez disso.
     * 
     */
    constructor() {
        if(this.instancia){
            throw new Error(`Não é possível criar a instância da classe Mensagem com o construtor. Use o método estático getInstancia() em vez disso`);
        }
    }

    /**
     * Retorna uma instância do objeto.
     * 
     * Garante que somente um objeto vai existir em memória. 
     * 
     * @returns Um objeto mensagem.
     */
    static getInstancia(){
        if (this.instancia == null) {
            this.instancia = new this();
            this.instancia.setMensagem("inicial");
        }
        return this.instancia;
    }
    
    getMensagem() {
        return this.mensagem;
    }

    setMensagem(mensagem) {
        this.mensagem = mensagem;
    }
}

// Exporta a classe
module.exports = Mensagem;