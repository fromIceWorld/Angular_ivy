/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {╔ÁisObservable as isObservable, ╔ÁisPromise as isPromise} from '@angular/core';
import {from, Observable, of} from 'rxjs';
import {concatAll, last as lastValue, map} from 'rxjs/operators';

import {Params, PRIMARY_OUTLET} from '../shared';

export function shallowEqualArrays(a: any[], b: any[]): boolean {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; ++i) {
    if (!shallowEqual(a[i], b[i])) return false;
  }
  return true;
}

export function shallowEqual(a: Params, b: Params): boolean {
  // Casting Object.keys return values to include `undefined` as there are some cases
  // in IE 11 where this can happen. Cannot provide a test because the behavior only
  // exists in certain circumstances in IE 11, therefore doing this cast ensures the
  // logic is correct for when this edge case is hit.
  const k1 = Object.keys(a) as string[] | undefined;
  const k2 = Object.keys(b) as string[] | undefined;
  if (!k1 || !k2 || k1.length != k2.length) {
    return false;
  }
  let key: string;
  for (let i = 0; i < k1.length; i++) {
    key = k1[i];
    if (!equalArraysOrString(a[key], b[key])) {
      return false;
    }
  }
  return true;
}

/**
 * Test equality for arrays of strings or a string.
 */
export function equalArraysOrString(a: string|string[], b: string|string[]) {
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    const aSorted = [...a].sort();
    const bSorted = [...b].sort();
    return aSorted.every((val, index) => bSorted[index] === val);
  } else {
    return a === b;
  }
}

/**
 * Flattens single-level nested arrays.
 */
export function flatten<T>(arr: T[][]): T[] {
  return Array.prototype.concat.apply([], arr);
}

/**
 * Return the last element of an array.
 */
export function last<T>(a: T[]): T|null {
  return a.length > 0 ? a[a.length - 1] : null;
}

/**
 * Verifys all booleans in an array are `true`.
 */
export function and(bools: boolean[]): boolean {
  return !bools.some(v => !v);
}

export function forEach<K, V>(map: {[key: string]: V}, callback: (v: V, k: string) => void): void {
  for (const prop in map) {
    if (map.hasOwnProperty(prop)) {
      callback(map[prop], prop);
    }
  }
}

export function wrapIntoObservable<T>(value: T|Promise<T>|Observable<T>): Observable<T> {
  if (isObservable(value)) {
    return value;
  }

  if (isPromise(value)) {
    // Use `Promise.resolve()` to wrap promise-like instances.
    // Required ie when a Resolver returns a AngularJS `$q` promise to correctly trigger the
    // change detection.
    return from(Promise.resolve(value));
  }

  return of(value);
}
