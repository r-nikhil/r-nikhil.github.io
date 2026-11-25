# Marks two patterns in rendered posts so the stylesheet can space them correctly.
# Article text and the Markdown sources are not changed; only a class is added to the generated HTML.
#   <p><strong>Title</strong></p>   -> class "bh"   (a bold line used as a small heading)
#   <li><ul>...</ul></li>           -> class "bare" (a list entry that holds only a nested list)
Jekyll::Hooks.register :posts, :post_convert do |post|
  html = post.content
  next unless html
  html = html.gsub(%r{<p>(\s*<strong>[^<]*</strong>:?\s*)</p>}) { "<p class=\"bh\">#{$1}</p>" }
  html = html.gsub(%r{<li>(\s*<[uo]l>)}) { "<li class=\"bare\">#{$1}" }
  post.content = html
end
