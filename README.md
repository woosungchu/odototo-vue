# odototo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# deploy to AWS S3
npm run build
cd dist
copy : $ aws s3 cp . s3://odototo.com/ --recursive
move : $ aws s3 mv . s3://odototo.com/ --recursive

```

#### Reference

- [AWS S3 CLI](http://docs.aws.amazon.com/cli/latest/reference/s3/index.html)
- [guide](http://vuejs-templates.github.io/webpack/)
- [docs for vue-loader](http://vuejs.github.io/vue-loader)
