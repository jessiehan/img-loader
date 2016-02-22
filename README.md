# img loader for webpack

## installation

`npm install img-loader --save-dev`

## Function

soooooooooo easy, just see the example below

#### before

``` css
.test{
  background: url(http://gtms02.alicdn.com/tps/i1/TB1BN4mJFXXXXbVXpXX4XhHIVXX-76-40.png) no-repeat 0 0;
}
```

#### after

``` css
.test{
  background: url(//img.alicdn.com/tps/i1/TB1BN4mJFXXXXbVXpXX4XhHIVXX-76-40.png_.webp) no-repeat 0 0;
}
```





### Example config


``` javascript
module.exports = {
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!img-loader'

      }
    ]
  }
};
```




## License

MIT (http://www.opensource.org/licenses/mit-license.php)
