# dvalidator

> A pure, extendable, very useful validator base Promise and Decorator

- <b>Object literals</b> : Base es7 Decorator, we can add a decorator on a object literals. Dvalidator will add some unenumerable keys to store rules.
- <b>Asynchronous</b> : dvalidator support async validator function
- <b>Ordered</b> : When you call `$validate` function, dvalidator will exec validator function in ordered.

## Install

```bash
npm install dvalidator --save
```

```bash
npm install @babel/plugin-proposal-decorators --save-dev
```

## Usage

config babel.config.js

```js
plugins: [
  [
    '@babel/plugin-proposal-decorators',
    {
      legacy: true
    }
  ]
]
```
<hr>
For example, we validate a user object. <br>
nickname and phone is required, also phone is validate from remote server.

```js
import dvalidator from 'dvalidator'

const requiredRule = {
  validator: val => val != null && val !== '',
  message: 'required'
}
const required = dvalidator(requiredRule)
const checkPhone = dvalidator(value => fetch(`xxx/${value}`))

const user = {
  @required('nickname is required')
  nickname: '',
  @checkPhone('phone valid fail')
  @required
  phone: ''
}

user
  .$validate()
  .then(/* success */)
  .catch(reason => {
    /* fail */
    alert(reason[0].message)
  })
```

## Interface

arguments structure, describe with [typescript interface](lib/index.d.ts).
