document.getElementById('input-btn').addEventListener('click', function(e){
    e.preventDefault()
    

    const userInput = document.getElementById('userInput').value
    const divReturn =  document.getElementById('return')
    const p =  document.createElement('p')

    divReturn.innerHTML = "";

    function repet(n) {
        if (n <= 0) {
          return  'Insira um número válido';
        } else if (n === 1) {
            return 'chucks';
        } else {
            return 'chucks-' + repet(n - 1);
        }
    }

    const repeat = Number(userInput);
    const result = repet(repeat);
    p.innerHTML = result;
    divReturn.appendChild(p);
    divReturn.style.display = "flex";
})