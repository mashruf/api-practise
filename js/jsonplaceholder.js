const loadComment = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComment(data));
}

loadComment();

const displayComment = (comments) => {
    comments.forEach(comment => {
        const showComment = document.getElementById('show-comment');
        const div = document.createElement('div');
        div.classList.add('comment');

        div.innerHTML = `
            <p>Id: ${comment.id}</p>
            <p>Comment: ${comment.body}</p>
            <button onclick="loadData(${comment.id})">Details</button>
        `;

        showComment.appendChild(div);
    });

}

const loadData = (id) => {
    const url = `https://jsonplaceholder.typicode.com/comments/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data));
}


const displayData = details => {
    const showDetails = document.getElementById('show-details');
    showDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('detail');

    div.innerHTML = `
        <h1>Details</h1>
        <p>Post Id: ${details.postId}</p>
        <p>Name: ${details.name}</p>
        <p>Email: ${details.email}</p>
    `;

    showDetails.appendChild(div);
}
