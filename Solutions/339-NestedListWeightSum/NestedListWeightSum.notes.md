# Notes: LC 339 Nested List Weight Sum

This one is simple `dfs`, except you are given a weird `NestedInteger`type to
work with. The idea is to keep track of the current level using recursive `dfs`,
and to iterate through all of the values in each "layer" of the list. When a new
"layer" (a nested list) is reached, call `dfs` on that new layer (while
incrementing the level) and continue.
