# jsprops
Properties for JavaScript Prototypes.

Library provides class based properties that can be bound directly to a prototype, which reduces redundancy of coping the same property among instances.

Additionally, we can easily inherit from Properties class, extending it by our own getters/setter logic.

**Example**

```coffeescript
{ property } = require 'jsprops'

class Klass
	foo: property 'foo'
	bar: property('bar', null, 'def_value')
	baz: property('baz',
		set: (set, val) ->
			set val.replace /a/, 'b'
	)
	woof: property('woof',
		init: (set) -> set null
		get: (get) -> return get().replace /z/, 'b'
		set: (set, val) ->
			set val.replace /a/, 'b'
	)
```

Repeated name in a declaration is required by the design.

## Signals
Signals are extended properties, adding nice bindings to an event emitter. An interesting feature is the support for inheritance. You can define an overriding signal in a child class, while still preserving listener defined in the super class. The only condition is the requirement of using `@signal` instead of `signal` (needed for prototype chain resolution).

For signals, **set** is an emit and **get** returns temp object with binding functions (on, once) and init. All of them can be defined inside a declaration. They are also compatible with [EventEmitter2Async](https://github.com/TobiaszCudnik/EventEmitter2Async) (with callback and after/before events).

*Example*

```coffeescript
{
	signal
	SignalsMixin
} = require 'jsprops'
class Klass extends SignalsMixin
	foo: signal('foo', on: -> console.log 'klass1' )

class Klass2 extends Klass
	foo: @signal('foo', on: -> console.log 'klass2' )
```

## Contracts
This library provides contracts (read - runtime type checking) based on [http://disnetdev.com/contracts.coffee/](contracts.coffee) library. There's a special build for that, so don't worry when using the default one. To make it working a global flag `global.contracts` is needed to be true.