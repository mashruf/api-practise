const loadComment = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComment(data));
}

// loadComment();

const displayComment = (comments) => {
    comments.forEach(comment => {
        const showComment = document.getElementById('show-comment');
        const div = document.createElement('div');
        div.classList.add('comment');

        div.innerHTML = `
            <h3>${comment.id}</h3>
            <p>${comment.body}</p>
        `;
        const comments = document.getElementsByClassName('comment');
        for (const comment of comments) {
            comment.style.border = '1px solid red';
            comment.style.marginBottom = '5px';
        }
        showComment.appendChild(div);
    });

}