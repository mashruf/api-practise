const loadComment = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComment(data));
}

loadComment();

const displayComment = (comments) => {
    comments.forEach(comment => {
        console.log(comment);
    });

}