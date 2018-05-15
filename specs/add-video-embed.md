# Add video embed support

👋 Hai!

I want to add video embed support to our blog posts. It's tricky to have to find and grab HTML from sources like YouTube and paste them into the markdown files. We've had issues where the HTML jumbled, and broke things.


## Task

I did some research, and it looks like we can add a Jekyll plugin that can magically turn Liquid code into HTML.

I was thinking the embed snippet would look something like this:

```
{% Video https://www.youtube.com/watch?v=_wx__fEyDj0 %}
```

I've added 3 embed snippets in my blog post (`/src/_posts/2018-05-15-potato.markdown`).

I've commented them out for now. Otherwise, Jekyll breaks and I can't see the local dev site.


## Requirements
* Make the `{% Video %}` tag work
* Should work for YouTube and Wistia embeds
* Embeds **need** to be responsive
* YouTube "start at" timecode should still work



## Mock up

![mockup](./images/video-embed-mockup.png)

I've included a mock of how the embed should look like for Desktop and Mobile.



## Nice to have

It would be cool if the video embed could be larger compared to the text copy area. I really like this effect! Maybe… 20% larger on each side?

It shouldn't break responsiveness though. As you resize the browser, we shouldn't see any horizontal scrollbar happening.
