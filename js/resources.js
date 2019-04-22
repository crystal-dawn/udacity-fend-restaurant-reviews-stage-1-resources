const resources = new Map();

resources
  // Accessibility
  .set("The new way to test accessibility with Chrome DevTools - A11ycasts #23", {
    url: "https://youtu.be/b0Q5Zp_yKaU",
    criteria: "Accessibility",
    type: "Tutorial (Video)",
    sharer: "Carlota Pearl"
  })
  .set("Accessibility: ARIA landmark roles", {
    url: "https://youtu.be/j5OKo1AJIrg",
    criteria: "Accessibility",
    type: "Tutorial (Video)",
    sharer: "OlaG (FEND)"
  })
  .set("tanaguru contrast finder", {
    url: "http://contrast-finder.tanaguru.com/",
    criteria: "Accessibility",
    type: "Tool",
    sharer: "JaniceM"
  })
  .set("The A11Y Project", {
    url: "https://a11yproject.com/",
    criteria: "Accessibility",
    type: "Article/Blog",
    sharer: "Rodrick [FEND]"
  })
  .set("Using the aria-labelledby attribute", {
    url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute",
    criteria: "Accessibility",
    type: "Documentation",
    sharer: "Sara Krum"
  })
  .set("What's New In DevTools (Chrome 65)", {
    url: "https://developers.google.com/web/updates/2018/01/devtools",
    criteria: "Accessibility",
    type: "Article/Blog",
    sharer: "Carlota Pearl"
  })
  .set("What's New In DevTools (Chrome 65) Release Notes", {
    url: "https://developers.google.com/web/updates/2017/05/devtools-release-notes",
    criteria: "Accessibility",
    type: "Article/Blog",
    sharer: "Carlota Pearl"
  })
  .set("ARIA Roles and Attributes: How to Actually Use Them", {
    url: "https://thecodeboss.dev/2016/09/aria-roles-and-attributes-how-to-actually-use-them/",
    criteria: "Accessibility",
    type: "Article/Blog",
    sharer: "Kaisma"
  })
  .set("ARIA Gone Wild", {
    url: "https://www.slideshare.net/jared_w_smith/aria-gone-wild",
    criteria: "Accessibility",
    type: "Article/Blog",
    sharer: "Carlota Pearl"
  })
  .set("Flexbox & the keyboard navigation disconnect", {
    url: "https://tink.uk/flexbox-the-keyboard-navigation-disconnect/",
    criteria: "Accessibility",
    type: "Article/Blog",
    sharer: "Crysta;"
  })
  .set("Keyboard and Interaction Accessibility Techniques", {
    url: "https://www.slideshare.net/jared_w_smith/keyboard-accessibility-24070581",
    criteria: "Accessibility",
    type: "Article/Blog",
    sharer: "Carlota Pearl"
  })
  .set("Practical ARIA Examples", {
    url: "http://heydonworks.com/practical_aria_examples/",
    criteria: "Accessibility",
    type: "Article/Blog",
    sharer: "Kraftaa Maria"
  })
  .set("Landmark Roles", {
    url: "http://karlgroves-sandbox.com/CheatSheets/ARIA-Cheatsheet.html",
    criteria: "Accessibility",
    type: "Article/Blog",
    sharer: "Tony Boswell [FEND]"
  })
  .set("What is a suitable WAI-ARIA role attribute for a map element", {
    url: "https://stackoverflow.com/questions/44712753/what-is-a-suitable-wai-aria-role-attribute-for-a-map-element",
    criteria: "Accessibility",
    type: "Question/Answer",
    sharer: "Crystal"
  })

// General
  .set("How to securely store API Keys", {
    url: "https://medium.freecodecamp.org/how-to-securely-store-api-keys-4ff3ea19ebda",
    criteria: "General",
    type: "Article/Blog",
    sharer: "Adventurenow (FEND)"
  })
  .set("nodemon reload, automatically", {
    url: "https://nodemon.io/",
    criteria: "General",
    type: "Package",
    sharer: "Kaisma"
  })
  .set("Mapbox GL JS", {
    url: "https://docs.mapbox.com/mapbox-gl-js/api/",
    criteria: "General",
    type: "Documentation",
    sharer: "Becky [FEND]"
  })
  .set("Promises Workshop for JavaScript!", {
    url: "https://github.com/stevekane/promise-it-wont-hurt",
    criteria: "General",
    type: "Package",
    sharer: "RyanB[FEND]"
  })
  .set("Understanding Promises", {
    url: "https://scotch.io/tutorials/javascript-promises-for-dummies#toc-understanding-promises",
    criteria: "General",
    type: "Text Tutorial",
    sharer: "Kraftaa Maria"
  })
  .set("Using dotenv package to create environment variables", {
    url: "https://medium.com/@thejasonfile/using-dotenv-package-to-create-environment-variables-33da4ac4ea8f",
    criteria: "General",
    type: "Article/Blog",
    sharer: "dannygsmith [FEND] OKC"
  })
  .set("Javascript Promises", {
    url: "https://spring.io/understanding/javascript-promises",
    criteria: "General",
    type: "Article/Blog",
    sharer: "susanna [FEND]"
  })
  .set("Best practices for securely storing API keys", {
    url: "https://medium.freecodecamp.org/how-to-securely-store-api-keys-4ff3ea19ebda",
    criteria: "General",
    type: "Article/Blog",
    sharer: "Carlota Pearl"
  })

  // Offline Availability
  .set("Caching Files with Service Worker", {
    url: "https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker",
    criteria: "Offline Availability",
    type: "Text Tutorial",
    sharer: "David Jenness (FEND)"
  })
  .set("How to Setup a Basic Service Worker (with Caching)", {
    url: "https://www.youtube.com/watch?v=BfL3pprhnms",
    criteria: "Offline Availability",
    type: "Video Tutorial",
    sharer: "Chase Owens (FEND)"
  })
  .set("Making a Simple Site Work Offline with ServiceWorker", {
    url: "https://ponyfoo.com/articles/simple-offline-site-serviceworker",
    criteria: "Offline Availability",
    type: "Article/Blog",
    sharer: "gizemny [FEND]"
  })
  .set("positioning a mapbox/leaflet map inside a container div", {
    url: "https://stackoverflow.com/questions/32571611/positioning-a-mapbox-leaflet-map-inside-a-container-div",
    criteria: "Offline Availability",
    type: "Question/Answer",
    sharer: "Moschops [FEND] PDX"
  })
  .set("Service Workers: an Introduction", {
    url: "https://developers.google.com/web/fundamentals/primers/service-workers/",
    criteria: "Offline Availability",
    type: "Text Tutorial",
    sharer: "Christopher Von Wilczur {FEND}"
  })
  .set("ServiceWorker Cookbook", {
    url: "https://serviceworke.rs/",
    criteria: "Offline Availability",
    type: "Article/Blog",
    sharer: "Amber Roberts {FEND}"
  })
  .set("Service Workers: an Introduction", {
    url: "https://developers.google.com/web/fundamentals/primers/service-workers/",
    criteria: "Offline Availability",
    type: "Text Tutorial",
    sharer: "Christopher Von Wilczur {FEND}"
  })
  .set("Traverse Media Intro to Service Workers and Caching", {
    url: "https://youtu.be/gLdXxFS8BV4",
    criteria: "Offline Availability",
    type: "Video Tutorial",
    sharer: "Carlos F"
  })
  .set("MDN Cache.addAll()", {
    url: "https://developer.mozilla.org/en-US/docs/Web/API/Cache/addAll",
    criteria: "Offline Availability",
    type: "Documentation",
    sharer: "Sara Krum"
  })
  .set("The offline cookbook", {
    url: "https://jakearchibald.com/2014/offline-cookbook/",
    criteria: "Offline Availability",
    type: "Text Tutorial",
    sharer: "susanna [FEND]"
  })
  .set("TalAter/awesome-service-workers", {
    url: "https://developer.mozilla.org/en-US/docs/Web/API/Cache/addAll",
    criteria: "Offline Availability",
    type: "Documentation",
    sharer: "susanna [FEND]"
  })
  .set("Instant Loading: Building offline-first Progressive Web Apps - Google I/O 2016", {
    url: "https://www.youtube.com/watch?v=cmGr0RszHc8",
    criteria: "Offline Availability",
    type: "Video Tutorial",
    sharer: "susanna [FEND]"
  })

  // Responsive Design
  .set("Responsive Images: If you’re just changing resolutions, use srcset.", {
    url: "https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/",
    criteria: "Accessibility",
    type: "Article/Blog",
    sharer: "Doug Brown [Project Coach]"
  })
  .set("Mobile-First, Adaptive, or Responsive Design: Which to Choose for the Website so Customers Want to Buy Your Product or Service?", {
    url: "https://codeburst.io/mobile-first-adaptive-or-responsive-design-which-to-choose-for-the-website-so-customers-want-to-aafc86443222",
    criteria: "Accessibility",
    type: "Article/Blog",
    sharer: "Carlota Pearl"
  })
  .set("Understanding the difference between mobile first, adaptive, and responsive design", {
    url: "https://fredericgonzalo.com/en/2017/03/01/understanding-the-difference-between-mobile-first-adaptive-and-responsive-design/",
    criteria: "Accessibility",
    type: "Article/Blog",
    sharer: "Carlota Pearl"
  })
  .set("Lab: Responsive Images", {
    url: "https://developers.google.com/web/ilt/pwa/lab-responsive-images",
    criteria: "Accessibility",
    type: "Text Tutorial",
    sharer: "Carlota Pearl"
  })
  .set("Find element that is causing the showing of horizontal scrollbar in Google Chrome", {
    url: "https://stackoverflow.com/questions/31458477/find-element-that-is-causing-the-showing-of-horizontal-scrollbar-in-google-chrom/31458863",
    criteria: "Accessibility",
    type: "Question/Answer",
    sharer: "Lindsay C [FEND]"
  })
  .set("Time saving css techniques to create responsive images", {
    url: "https://medium.freecodecamp.org/time-saving-css-techniques-to-create-responsive-images-ebb1e84f90d5",
    criteria: "Accessibility",
    type: "Article/Blog",
    sharer: "Mayguen {FEND}"
  })
  .set("Media Queries for Standard Devices", {
    url: "https://css-tricks.com/snippets/css/media-queries-for-standard-devices/",
    criteria: "Accessibility",
    type: "Media Queries for Standard Devices",
    sharer: "Randy L [FEND]"
  })
  .set("MDN box-sizing", {
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing",
    criteria: "Accessibility",
    type: "Documentation",
    sharer: "Susan P. (FEND) Bay Area"
  })
