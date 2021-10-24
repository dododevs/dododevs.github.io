Vue.component('news-article', {
    props: ['news'],
    template: `
        <div class="px-3 px-md-0 py-4">
            <h2 class="f-700"><a :href="news.url">{{ news.title }}</a></h2>
            <h5 class="text-secondary">{{ news.creator.toUpperCase() }} &bull; {{ new Date(news.date).toLocaleDateString() }}</h5>
        </div>
    `
});

var newsContainer = new Vue({
    el: '#news-container',
    data: {
        feed: []
    }
});

fetch('https://zingarellinews.altervista.org/test/feed.php').then(c => c.json().then(d => {
    Vue.set(newsContainer, 'feed', d);
}))