# Notes: LC 796 Rotate String

There's a quick solution to this one. Don't focus on rotations. Think about substrings.
If the string is properly rotated, then adding it to itself will recreate the original
string somewhere inside the substring (by x amount of rotations). You can use the
`includes` operator in Typescript for this one.
