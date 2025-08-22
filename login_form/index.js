document.getElementById('submit').addEventListener('click',function(ele)
{
    ele.preventDefault();
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const message = document.getElementById('result');
    if(user==='tamil'&& pass==='selvan')
    {
        message.textContent ='login'
        message.className='success'
    }
    else{
        message.textContent='*invalid'
        message.className='failed'
    }
})