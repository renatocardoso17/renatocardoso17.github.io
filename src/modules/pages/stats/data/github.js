// TODO To be provided by an API
const github = [
    {
        label: 'Number of linter warnings',
        // TODO ammend this with a pre-commit hook
        // `npm run lint | grep problems | tail -1 | awk '{print $2}'`
        value: '0',
    },
    { /* find . | grep ".js" | grep -vE ".min.js|node_modules|build|functions|.git|.json" | xargs -I file cat file | wc -l */
        label: 'Lines of Javascript powering this website',
        value: '1304'
    }
];

export default github;
