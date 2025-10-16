# Notes: LC 71 Simplify Path

Use a stack to keep track of each "segment" from the input. The trick here is to
`.split` the input by "/", which will not only remove duplicate "/"s but also
separate everything nicely. Remember, when you `.split` with a separator that
appears twice or more in a row, an `''` will be added to the output from the
separation "between" each of the duplicate separators.
