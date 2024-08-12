export default class Utils {
    // Método para formatar CPF
    static formatarCPF(cpf) {
      // Remove qualquer caractere não numérico
      const cleanedCPF = cpf.replace(/\D/g, '');
      // Aplica a máscara de CPF
      return cleanedCPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }
  
    // Método para formatar número de telefone
    static formatarTelefone(number) {
      // Remove qualquer caractere não numérico
      const cleanedNumber = number.replace(/\D/g, '');
      // Aplica a máscara de telefone
      return cleanedNumber.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
  }
  