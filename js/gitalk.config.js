var gitalk = new Gitalk({
    clientID: '04a986d13a4a07b6aae3',
    clientSecret: '1f86c7e63ae87e7277becc343fc5978469c13da1',
    repo: 'gitalk',
    owner: 'tianxily',
    admin: ['tianxily'],
    id: location.pathname,      // Ensure uniqueness and length less than 50
    distractionFreeMode: false  // Facebook-like distraction free mode
})
gitalk.render('gitalk-container')