const calc = document.getElementById('calculate')

calc.addEventListener('click', (e) => {
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.getElementById('result')

    if (height < 0 || isNaN(height) || height === '') {
        result.appendChild(document.createTextNode('Please Input Valid Height'))
        result.style.display = 'block'
        setTimeout(() => {
            location.reload()
        }, 1000)
    }

    else if (weight < 0 || isNaN(weight) || weight === '') {
        result.innerHTML = 'Please Input Valid Weight'
        result.style.display = 'block'

        setTimeout(() => {
            location.reload()
        }, 1000)
    }

    else {
        const bmi = (weight / ((height**2)/10000)).toFixed(2)
        
        if (bmi < 18.6) {
            result.innerHTML = `<p>You are Underweight</p> <p>Your BMI is ${bmi}</p>`
        }
        else if (bmi > 18.6 && bmi < 24.9) {
            result.innerHTML = `<p>You are Normal</p> <p>Your BMI is ${bmi}</p>` 
        }
        if (bmi > 24.9) {
            result.innerHTML = `<p>You are Overweight</p> <p>Your BMI is ${bmi}</p>`
        }

        result.style.display = 'block'

        setTimeout(() => {
            result.style.display = 'none'
        }, 3000)
    }
})