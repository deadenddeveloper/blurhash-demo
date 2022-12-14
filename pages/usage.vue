<template>
  <ui-heading>How to use Blurhash?</ui-heading>

  <ui-heading component="h2">On the backend</ui-heading>

  <ui-text>
      <p>Anyway, you need to get the Blurhash from the images first. I usually do this at the point where the image goes into the database and save the Blurhash for it, so I can give it to the frontend along with the URL to the original image and the dimensions</p>
      <p>Of course, depending on how the images are stored and the programming language, a lot can vary. But there, on the frontend, you are required to Blurhash. There are already many adaptations in different languages, so it shouldn't be a problem. Just pick what works best for you
        <a href="https://github.com/woltapp/blurhash#implementations" target="_blank" class="underline">here</a> and go for it!</p>
      <p>For convenience, along with Blurhash, it's a good idea to pass the pixel size of the images to the client side as well, but that's not necessary.</p>
  </ui-text>

  <ui-heading component="h2">On the frontend</ui-heading>

  <ui-text>
    <p>You got the data for the img-tag renderer from somewhere in the backend, which contains some magic string in addition to the URL to the original image. This is Blurhash.</p>
    <p>Now you can get a placeholder from this string and draw it on Canvas or put Base64 in the src attribute of the img tag. In this case, users who come to the site will see something that looks like real images as long as they are loaded by the browser. Believe me, it's much better than seeing nothing or just colored rectangles at best.</p>
    <p>To generate a placeholder from Blurhash, you need to pass some size, so ask your backend developers to also add the width and height of the original image. Then you can draw the placeholder using that size or its proportions, and the image change in the img tag will be much smoother for the user.</p>
    <p>Ready solutions for turning Blurhash into a picture can be found <a href="https://github.com/woltapp/blurhash#implementations" target="_blank" class="underline">here</a>.</p>
  </ui-text>
</template>
