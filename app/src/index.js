import p1 from 'p1';
import { fileFromAFolder } from 'p1/folder/file';
import Foo from 'p2/f2/foo';
import p3 from 'p3/p3';

p1();
fileFromAFolder();
(new Foo()).foo();
console.log(JSON.stringify(p3));
