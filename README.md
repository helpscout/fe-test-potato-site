# 🥔 Potato Site

> Front-end Engineer Hiring Project (Design Team)

## 💪 Challenge

Check out the [challenge notes](./challenge.md) for details on project requirements and submission.


## 🛠 Prerequisite

* [Ruby](https://github.com/rbenv/rbenv)
* [Bundler](https://bundler.io/)
* [Jekyll](https://jekyllrb.com/)
* [Node](https://nodejs.org/en/)

A working Ruby dev environment. Mac OS should come with Ruby by default, but it may not be reliable. We recommend going with a solution like [rbenv](https://github.com/rbenv/rbenv) to manage local Ruby dev environments.


## 🔧 Setup

Fork/clone/download this repo it to your computer.

Go into that directory and install dependencies by running:

```
bundle install
```


## 📂 File structure

Below are notable folders in this project:

```
/fe-test-potato-site
|- __tests__/
|- specs/
\- src/
  |- _layouts/
  |- _posts/
  |- css/
  \- js/
```

The blog posts live in the `_posts/` folder.


## 🕹 Development

This project is basically an out-of-the-box Jekyll site, that was generated via `jekyll new`.

Fire up the local development server by running:

```
bundle exec jekyll serve --watch
```

Visit the dev site at [http://localhost:4000/](http://localhost:4000/).

Check out the blog post at [http://localhost:4000/2018/05/15/potato/](http://localhost:4000/2018/05/15/potato/).


## ⚗️ Testing

The only test suite set up is powered by Jest. To get that setup, install dependencies by running:

```
npm install
```

To run the tests, run this command:

```
npm test
```
