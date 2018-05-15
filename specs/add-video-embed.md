# 📹 Add video embed support

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

We only need to support YouTube/Wistia for now. But, we're planning on maybe adding other embed options, like Vimeo or DailyMotion. The solution we come up with now should be flexible enough to (relatively easily) add future embeds. If it's simple enough for someone on the design/growth team to add/update, even better!


## Requirements
* Make the `{% Video %}` tag work
* Needs to support YouTube and Wistia embeds
* Embeds **need** to be responsive
* YouTube "start at" timecode should still work
* Make it flexible to easily add other video embed support (future)



## Mock up

![mockup](./images/video-embed-mockup.png)

I've included a mock of how the embed should look like for Desktop and Mobile.



## Nice to have

### Design

It would be cool if the video embed could be larger compared to the text copy area. I really like this effect! Maybe… 20% larger on each side?

It shouldn't break responsiveness though. As you resize the browser, we shouldn't see any horizontal scrollbar happening.


### Testing

Our previous dev added Jest for Javascript testing. I don't know how to write test, but I know how important they are. If you write out a JS-based solution, it would be nice to include some tests as well. Not necessary, but definitely nice to have!


## Helpful links/things

* [Jekyll plugins documentation](https://jekyllrb.com/docs/plugins/)
* [Wistia Embed documentation](https://wistia.com/support/developers/async-embeds)


#### Wistia embed code

Replace `WISTIA_VIDEO_ID` with the actual video ID.

```html
<script src="//fast.wistia.com/embed/medias/WISTIA_VIDEO_ID.jsonp" async></script>
<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;">
<div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;">
<div class="wistia_embed wistia_async_WISTIA_VIDEO_ID" seo=false videoFoam=true" style="height:100%;width:100%">&nbsp;</div></div></div>
```
