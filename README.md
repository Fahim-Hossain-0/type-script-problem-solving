📘 TypeScript Interview Questions – Answers (Bangla)
১. TypeScript-এ Interfaces এবং Types-এর পার্থক্য

TypeScript-এ interface এবং type — দুটোই অবজেক্টের কাঠামো বা টাইপ সংজ্ঞায়িত করতে ব্যবহৃত হয়। অনেক ক্ষেত্রেই তারা একে অন্যের বিকল্প হিসেবে কাজ করতে পারে, তবে বেশ কিছু গুরুত্বপূর্ণ পার্থক্য রয়েছে।

✔ Interface

অবজেক্টের গঠন (structure) নির্ধারণের জন্য সবচেয়ে প্রচলিত।

এক বা একাধিক interface কে extends করা যায়।

একই নামের interface দু’বার declare করলে স্বয়ংক্রিয়ভাবে merge হয়ে যায় (Declaration Merging)।

Class এর সাথে implements ব্যবহার করার জন্য খুবই উপযোগী।

উদাহরণ:

interface User {
  name: string;
}

interface User {
  age: number;
}

// Final User = { name: string; age: number }

✔ Type Alias

অবজেক্ট ছাড়াও union, tuple, primitive, function, intersection ইত্যাদি সংজ্ঞায়িত করার জন্য ব্যবহৃত হয়।

একই নামের type দুইবার declare করলে error হবে (merge হয় না)।

Multiple টাইপ একত্র করতে & (intersection) ব্যবহার করা হয়।

Callable objects কিংবা complex টাইপ স্ট্রাকচার তৈরিতে বেশি কার্যকর।

উদাহরণ:

type Status = "success" | "error" | "loading";

type User = {
  name: string;
} & {
  age: number;
};

🔍 সরল পার্থক্য টেবিল
বিষয়	interface	type
Declaration merging	✔ Yes	❌ No
Extending	✔ Easy	✔ Using &
Union support	❌ No	✔ Yes
Tuples/Primitives	❌ No	✔ Yes
Class implements	✔ Best	✔ Works

👉 সংক্ষেপে:

অবজেক্ট এবং ক্লাস-এর জন্য interface

Union, tuple, function, complex টাইপের জন্য type

২. TypeScript-এ keyof keyword-এর ব্যবহার

keyof হলো TypeScript-এর একটি শক্তিশালী keyword, যা কোনো object টাইপের সকল property নামকে union type আকারে প্রদান করে। এটি type-safety বজায় রেখে dynamic property access করতে সাহায্য করে।

✔ keyof কী করে?

একটি object-এর key-গুলোকে string union টাইপে রূপান্তর করে।

উদাহরণ:

interface Person {
  name: string;
  age: number;
  email: string;
}

type PersonKeys = keyof Person;

// PersonKeys = "name" | "age" | "email"

✔ keyof ব্যবহার করে নিরাপদ property access

function getProperty(obj: Person, key: PersonKeys) {
  return obj[key];
}

const person1: Person = {
  name: "fahim",
  age: 19,
  email: "fahimhossain735@gmial.com"
};

getProperty(person1, "name");  // Output: fahim
getProperty(person1, "age");   // Output: 19

কেন এটি উপকারী?

ভুল key ব্যবহার করলে TypeScript compile-time এ error দেখায়।

Dynamic property access-এর সময় bug কমায়।

Generic functions এবং reusable utilities লেখার জন্য খুবই কার্যকর।
