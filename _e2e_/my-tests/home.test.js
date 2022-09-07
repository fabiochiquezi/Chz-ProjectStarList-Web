describe('Home', function() {
    // Elements
    const title = {
        id:'#hero-h1',
        value: 'Your list of great works souvenirs'
    }
    const subtitle = {
        id: '#hero-description',
        value:'Mount your own list of movies, cartoons, series, books and games.'
    }
    const thumbs = {
        class: '.thumb',
        total: 15
    }
    const btnSignIn1 = { id: '#btn-signIn-1' }
    const btnSignIn2 = { id: '#btn-signIn-2' }
    const btnGithub  = { id: '#btn-github' }

    it.skip('main content', function(browser) {
        browser
            .url('http://localhost:3000/')
            .assert.textContains(title.id, title.value)
            .assert.textContains(subtitle.id, subtitle.value)
            .assert.elementsCount(thumbs.class, thumbs.total)
            .assert.elementPresent(btnSignIn1.id)
            .assert.elementPresent(btnSignIn2.id)
            .assert.elementPresent(btnGithub.id)
            .end();
    });

    it('signIn', (browser) => {
        //browser
            //.url('http://localhost:3000/')
    })
});
