# Notes: LC 271 Encode And Decode Strings

The trick for this one is to use the UTF-16 char codes to represent each word.
In TS, this can be done with the `.charCodeAt` method, and the decoding can be
done with the `String.chatCodeFrom(charCode)` method.

The idea is that each each char gets converted into it's character code and
separated with an arbitrary separator. Then, each word is also separated with an
arbitrary separator.

To decode, split the input by word and then by character and decode.
