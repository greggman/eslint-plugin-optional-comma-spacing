[![Build Status](https://travis-ci.org/greggman/eslint-plugin-optional-comma-spacing.svg)](https://travis-ci.org/greggman/eslint-plugin-optional-comma-spacing)

# eslint-plugin-optional-comma-spacing

<a href="http://eslint.org/">ESLint</a> rule for optionally requiring spaces before or after commas.

## Why Use It

You'd like to optionally require spaces before or after commas. For example if you use the standard `comma-spacing`
this will fail

    longest.id         = Math.max(longest.id        , game.gameId.length);
    longest.numPlayers = Math.max(longest.numPlayers, game.numPlayers.toString().length);
    longest.name       = Math.max(longest.name      , game.name.length);

I wanted those spaces before the commas to be optional hence this plugin.

This is just a clone of the standard [comma-spacing rule](http://eslint.org/docs/rules/comma-spacing.html).
The difference is where as the `comma-spacing` rule only has `before: true | false` and `after: true | false`
this one has `before: undefined | true | false` and `after: undefined | true | false`. Both rules default
to undefined so you can therefore do this

    'eslint-plugin-optional-comma-space': [2, {'after': true}],

Which will require spaces after a comma but before a comma they are optional.

## Further Reading

* http://eslint.org/

