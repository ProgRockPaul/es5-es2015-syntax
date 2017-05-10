// modules allow code to be shared between javascript files. This is great because we can inject our code in various places, especially useful in frameworks.

// require files
import something from 'framework';
import * as something from 'framework';
import {matchedProp} from 'framework';

//expose or export values
export default function something {};
export var value = 'value';
export var another = 'value2';
export var matchedProp = 'someValue';

// in order use something it must be exported then imported.
