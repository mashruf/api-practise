const loadUser = () => {
    const url = `https://randomuser.me/api/?results=10`;

    fetch(url)
        .then(res => res.json())
        .then((data) => displayUser(data));
}

loadUser();

const displayUser = data => {
    const users = data.results;
    // console.log(users);

    users.forEach(user => {
        console.log(user);
        const showUser = document.getElementById('show-user');
        const div = document.createElement('div');
        div.classList.add('detail');
        div.innerHTML = `
            <img src="${user.picture.large}">
            <h3>Street</h3>
            <p>Street Number: ${user.location.street.number}</p>
            <p>Street Name: ${user.location.street.name}</p>
            <h3>Location</h3>
            <p>City: ${user.location.city}</p>
            <p>State: ${user.location.state}</p>
            <p>Country: ${user.location.country}</p>
            <p>Post Code: ${user.location.postcode}</p>
            <h3>Coordinates</h3>
            <p>Latitude: ${user.location.coordinates.latitude}</p>
            <p>Longitude: ${user.location.coordinates.longitude}</p>
            <h3>Time Zone</h3>
            <p>Offset: ${user.location.timezone.offset}</p>
            <p>Description: ${user.location.timezone.description}</p>

        `;
        showUser.appendChild(div);
    });
}