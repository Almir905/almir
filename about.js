const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const input3 = document.querySelector('.input3');
const button = document.querySelector('.btn');
const base_url = 'https://66f1b3ef415379191551da76.mockapi.io/les';

button.addEventListener('click', () => {
    let valid = true;

    if(input1.value.trim().length === 0) {
        input1.style.border = '1px solid red';
        valid = false;
    } else {
        input1.style.border = '1px solid silver';
    }

    if(input2.value.trim().length === 0) {
        input2.style.border = '1px solid red';
        valid = false;
    } else {
        input2.style.border = '1px solid silver';
    }

    if(input3.value.trim().length === 0) {
        input3.style.border = '1px solid red';
        valid = false;
    } else {
        input3.style.border = '1px solid silver';
    }
    if (valid) {
        const data = {
            name: input1.value,
            homeWork: input2.value,
            surname: input3.value
        };

        fetch(base_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            console.log('Success:', result);
            window.location.href = 'index.html'
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Ошибка при отправке данных.');
        });
    }
});
