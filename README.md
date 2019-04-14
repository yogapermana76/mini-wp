# mini-wp
```javascript
$ npm install
$ node app.js
```
Access server via `http://localhost:3000`<br>
Access client via `http://localhost:8080`

## Routes

| Routes | HTTP | Header(s) | Body | Response | Description |
| :--: | :--: | :--: | :--: | :--: | :--: |
| /users | POST | none | name: String (**required**), email: String (**required**), password: String (**required**) | **Success**: Register a user, **Error**: Internal server error (Validation) | Register a user |
| /users/login | POST | none|email: String (**required**), password: String (**required**) | **Success**: Login as a user, **Error**: Internal server error (Validation)|Login as a user|
| /users/login/google | POST | none | email: String (**required**), password: String (**required**) |**Success**: Login as a user via Google, **Error**: Internal server error (Validation)|Login as a user via Google |
| /articles | GET | token | none | **Success**: Get user's posted articles, **Error**: Internal server error (Validation) | Get user's posted articles |
| /articles | POST | token | title: String (**required**), content: String (**required**), image: File (**optional**) | **Success**: Create an article, **Error**: Internal server error (Validation) | Create an article |
| /articles/:id | PUT | token | title: String (**optional**), content: String (**optional**), image: File (**optional**) | **Success**: Update an article, **Error**: Internal server error (Validation) | Update an article|
| /articles/:id | DELETE | token | none |**Success**: Delete an article, **Error**: Internal server error (Validation) | Delete an article |