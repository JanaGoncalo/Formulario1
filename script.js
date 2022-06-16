// Função para calcular a idade com base na data de nascimento.
function getAge(birth) {
  const current = new Date()
  let diff = current.getFullYear() - birth.getFullYear()

  if (
    new Date(current.getFullYear(), current.getMonth(), current.getDate()) <
    new Date(current.getFullYear(), birth.getMonth(), birth.getDate())
  )
    diff--

  return diff
}

// "Pegar" os elementos dos campos:
const birthField = document.querySelector('#birth')
const ageField = document.querySelector('#age')

// Calcular a idade sempre que o campo da data de nascimento for alterado:
birthField.addEventListener('change', event => {
  const date = new Date(event.target.value)

  // Concatenando a idade calculada com o termo "anos":
  ageField.value = getAge(date) + ' anos'
})

function validar() {
  var nome = document.formulario.nome.value
  var email = document.formulario.email.value
  var estadocivil = document.formulario.estadocivil.value

  var validaNome = false
  var validaEmail = false
  var validaEstadocivil = false

  if (nome == '') {
    document.formulario.nome.focus()
    return false
  }
  if (nome.length < 15) {
    document.formulario.nome.focus()
    return false
  }

  if (isNaN(nome) == false) {
    alert('Digite um nome, você digitou um número!')
    document.formulario.nome.focus()
    return false
  }

  if (isNaN(nome) == true) {
    validaNome = true
  }

  if (email == '') {
    document.formulario.email.focus()
    return false
  }
  if (email.length < 10) {
    document.formulario.email.focus()
    return false
  }

  if (isNaN(email) == true) {
    validaEmail = true
  }

  if (estadocivil == '') {
    document.formulario.estadocivil.focus()
    return false
  }

  if (isNaN(estadocivil) == true) {
    validaEstadocivil = true
  }

  if (validaNome == true && validaEmail == true && validaEstadocivil == true) {
    alert('Parabéns ' + nome + ', seus dados foram enviados com sucesso!')
    return true
  }
}
