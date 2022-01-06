# AngularStaticBlog

This project goal is to provide reliable page viewing experience on users.pja.edu.pl <br>
But it can be easily deployed on other servers.

## Quick start
> By default, this automatic upload will clear www directory on evey update, you can change this in `deploy.yml`

* Create new repository by clicking `Use this template` button.
* Provide two secrets in repository settings that is username and password

And you are done! Just push new blog posts and see them on your page in about 2 minutes.

## Blog posting

Clone your repository and run this command `npm i && npm run blog:post`, type new post's title and hit enter. Find new .adoc file inside blog directory, edit it and commit changes. Publishing will be handled for you automatically.

It's possible to create new post just by using GitHub's webpage interface. In order to create new post, you just need to create new file inside blog directory with .adoc extension, file MUST include standard post header, that is:

```adoc
:title: Post title
:description: Blog post
:category: Default
```
