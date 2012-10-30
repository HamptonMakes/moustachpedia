# HTML Transformations go here

$("/html") {
  rewrite_links()
  absolutize_srcs()

  

  add_assets()

  @import sections/header.ts
  @import sections/footer.ts
  
  $(".//img") {
    attribute("src") {
      value() {
        match(this()) {
          with(`\/\/`) { prepend("http:") }
        }
        prepend("http://mustachify.me/?src=")
      }
    }
  }

  @import mappings.ts
}

