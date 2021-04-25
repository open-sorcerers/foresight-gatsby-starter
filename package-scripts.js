module.exports = {
  scripts: {
    build: 'gatsby build',
    develop: 'gatsby develop',
    format: 'prettier --write "**/*.{js,jsx,ts,tsx,json,md}"',
    default: 'nps develop',
    serve: 'gatsby serve',
    clean: 'gatsby clean',
    test:
      'echo "Write tests! -> https://gatsby.dev/unit-testing" && exit 1',
    lint: 'eslint --fix src/**/*.js'
  }
}
