const base_url = 'https://66f1b3ef415379191551da76.mockapi.io/les'


// dom
const table = document.querySelector('.table')

const button = document.querySelector('.btn')

const getUser = () => {
    fetch(base_url) 
    .then(res => res.json())
    .then(res => {
        console.log(res);
        for (const el of res) {
            table.innerHTML += `            <tbody>
            <tr>
                <th scope="row">${el.id}</th>
                <td>${el.name}</td>
                <td>${el.homeWork}</td>
                <td>${el.surname}</td>
            </tr>

        </tbody>`
            
        }
        
    })
}
getUser()

button.addEventListener('click', () => {
    window.location.href = 'about.html'
})