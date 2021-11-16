const parrentByPosts = document.querySelector('.posts__content')
export async function reqestToPosts () {
    fetch("./json/posts.json")
    .then(response => response.json())
    .then(posts => {
        for (let i = 4; i > 0; i--) {
            const currentElem = posts[posts.length - i];
            const div = document.createElement('div');
            div.classList.add('posts__content--block', 'block' );
            div.innerHTML = `<img src="${currentElem.picture}" alt="Post #${posts.index}" class="block__img">
            <h6 class="block__subtitle">${currentElem.about}</h6>`
            parrentByPosts.append(div);
        }
    });
}