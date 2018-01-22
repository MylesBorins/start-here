# Seed Project
### Made with node and <3

## Dev

```bash
$ npm run dev
express serving dist/ and public/ at http://0.0.0.0:3000
```

* Start Watchify (browserify on changes to js)
* Start Express (static file server)
  * Server is running on port 3000 || process.env.PORT

## Prod

```
$ npm start
express serving dist/ and public/ at http://0.0.0.0:3000

```

* build project
* uglify and gzip js
  * only ???k!
* minified css
* starts express
  * Server is running on port 3000 || process.env.PORT


## Testing

```
$ npm test
OMG TESTS PASS # not actual message
```

This project has a series of unit(ish) tests. Currently API calls are not stubbed out, which could be done with sinon + rewire. The stack uses a module called [smokestack][smokestack], which will execute any code piped to it and pipe the output to STDOUT.

The tests are all written in tape. The blog post [Testing JavaScript Modules with Tape][use-tape] does a great job of explaining why tape is awesome!

#### Notes 

[smokestack]: https://www.npmjs.com/package/smokestack "smokestack on npmjs.com"
[use-tape]: http://ponyfoo.com/articles/testing-javascript-modules-with-tape "Testing JavaScript Modules with Tape"

## License

Apache 2.0 ~ check LICENSE

## Code of Conduct
Please note that this project is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms.
