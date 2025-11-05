# Notes

For this one, the main trick is to encode the characters of each string using
their UTF-16 character codes. Then, using a consistent separator between each
each character and between each word. Since the entire input will be encoded as
numbers, you can you any non-number as the separator.

One thing, when "placing" the separators, you can use the current index to tell
if you need to place one or not. It's not totally intuitive, but what I did in
this approach is to check the current index at the beginning of each word when
encoding. If the index is not `0`, then I know a new word is beginning. So, I
add the separator there. I use the same logic for the character encoding.

The final thing to add is a check for empty characters when decoding. They can
just be ignored!

| Time      | Space     |
| --------- | --------- |
| O(n \* m) | O(n \* m) |
