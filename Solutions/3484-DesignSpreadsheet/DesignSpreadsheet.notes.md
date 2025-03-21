# Notes: LC 3484 Design Spreadsheet

Although this problem involves a grid, you don't need to actually construct it.
Instead, you can use a hash map to track what value exists at which point in the
"grid".

Using a hash map, both the `set` and `reset` methods are pretty simply. For
`set`, you only have to add the value to the hash map. For reset, you only need
to set the cell's value to 0.

The `getValue` method is a little tricky because it the input can contain
integers or cell identifiers. The trick here is to do a simple if else statement
along with a function that tells if the value is a number or not.
