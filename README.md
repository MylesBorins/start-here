# Start Here
> quickly make a static website!

## Dev

```bash
$ npm run dev
```

* uses `serve` to make `/public` available on localhost

## Prod

```
$ npm run build
```

* compress CSS with postcss
* compress JS with terser
* compress HTML with html-minifier
* copy images (TODO compress those too)
* all compressed assets found in `/dist`


```
$ npm start
```

* build project
* uses `serve` to make `/public` available on localhost

## Testing

```
$ npm test
```

Run eslint

## License

Apache 2.0 ~ check LICENSE

## Code of Conduct
Please note that this project is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms.
