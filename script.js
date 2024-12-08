const form = document.querySelector('form')

form.addEventListener('submit', function(event){
    event.preventDefault()

    const height = parseFloat(document.querySelector('#height').value)
    const weight = parseFloat(document.querySelector('#weight').value)
    const result = (document.querySelector('#result'));

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `please enter a valid height`
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `please enter a valid weight`
    } else{
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2)

        if(bmi < 18.6){
            result.innerHTML = `${bmi} = you are Under Weight`
        } else if(bmi > 18.6 && bmi <= 24.9){
            result.innerHTML = `${bmi} = you are in a normal range`
        } else if(bmi > 24.9){
            result.innerHTML = `${bmi} = you are Over-Weight`
        }

        
    }

})


const body = document.querySelector('body')
const container = document.querySelector('.container')
const darkmode = document.querySelector('.darkmode')


//  darkmode.addEventListener('click', function(){
//      body.style.backgroundColor = '#3f3f3f'
//      container.style.backgroundColor = '#77787c'
// })


darkmode.addEventListener('click', function(){
    if(body.style.backgroundColor === 'rgb(63, 63, 63)'){

        body.style.backgroundColor = ''
        container.style.backgroundColor = ''
    }
    else{
        body.style.backgroundColor = '#3f3f3f'
    container.style.backgroundColor = '#77787c'
    }
    
})
