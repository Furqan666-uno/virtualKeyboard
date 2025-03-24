const display= document.querySelector('.display');
const keys= document.querySelectorAll('.key');
const space= document.querySelector('.spacebar');
const enter= document.querySelector('.enter');
const capslock= document.querySelector('.capslock');
let is_capslock= false
const del= document.querySelector('.del');

keys.forEach((key) => {
    key.onclick= () => {
        if (key.innerText!='Del' && key.innerText!='Cpslok' && key.innerText!='Enter')
        {
            display.innerText+= key.innerText
        }
    }
})

enter.addEventListener('click',if_enter= () => {
    let content= display.innerText
    let newContent= content+'\n'
    display.innerText= newContent
})

space.addEventListener('click',if_space= () => {
    let content= display.innerText
    let newContent= content+' '
    display.innerText= newContent
})

del.addEventListener('click',if_del= () => {
    let content= display.innerText
    let newContent= content.substr(0, content.length-1)
    display.innerText= newContent
})

//this func is written to make sure capslock is active until we click on it again
capslock.addEventListener('click',if_capslock= () => {
    if (is_capslock)
    {
        capslock.classList.remove('active')
        keys.forEach((key) => {
            if (key.classList.length>1)
            {
                //do nothing
            }
            else 
            {
                key.innerText= key.innerText.toLowerCase()
            }
        })
    }
    else 
    {
        capslock.classList.add('active')
        keys.forEach((key) => {
            if (key.classList.length>1)//if class name is more than 1, we know its del or enter, so we don't do anything
            {
                //do nothing
            }
            else //if class name is just 1 ,ie, key, then we convert then to uppercase
            {
                key.innerText= key.innerText.toUpperCase()
            }
        })
    }
    is_capslock= !is_capslock//to toggle between true and false od is_capslock 
})
