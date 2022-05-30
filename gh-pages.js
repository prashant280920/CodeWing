var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/prashant280920/CodeWing.git', // Update to point to your repository  
        user: {
            name: 'prashant', // update to use your name
            email: 'b19101@students.iitmandi.ac.in' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)