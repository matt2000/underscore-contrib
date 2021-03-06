// Underscore-contrib (underscore.util.existential.js 0.0.1)
// (c) 2013 Michael Fogus, DocumentCloud and Investigative Reporters & Editors
// Underscore-contrib may be freely distributed under the MIT license.

(function(root) {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `global` on the server.
  var _ = root._ || require('underscore');

  // Helpers
  // -------


  // Mixing in the truthiness
  // ------------------------

  _.mixin({
    exists: function(x) { return typeof x !== "undefined" && x !== null; },
    truthy: function(x) { return (x !== false) && _.exists(x); },
    falsey: function(x) { return !_.truthy(x); },
    not:    function(b) { return !b; },
    firstExisting: function() {
        for (var i = 0; i < arguments.length; i++) {
            if (_.exists(arguments[i])) return arguments[i];
        }
        return undefined;
    }
  });

})(this);
