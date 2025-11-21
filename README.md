# TypeScript Interview Questions – Answers (Bangla)

এই প্রজেক্টে TypeScript ইন্টারভিউর সাধারণ কিছু প্রশ্নের উত্তর এবং একটি TypeScript ফাইল (`solution.ts`) অন্তর্ভুক্ত রয়েছে।  
নিচে দুইটি প্রশ্নের বিস্তারিত বাংলা ব্যাখ্যা (Blog Post) দেওয়া হলো।

---

## 📘 ১. TypeScript-এ Interfaces এবং Types-এর পার্থক্য

TypeScript-এ `interface` এবং `type` — দুটোই অবজেক্টের কাঠামো বা টাইপ সংজ্ঞায়িত করতে ব্যবহৃত হয়।  
তবে তাদের মাঝে কিছু গুরুত্বপূর্ণ পার্থক্য রয়েছে, যা নিচে ব্যাখ্যা করা হলো।

---

### ✔ Interface

- অবজেক্টের গঠন (structure) নির্ধারণে ব্যবহার হয়।
- এক বা একাধিক interface কে `extends` করা যায়।
- একই নামে দুইবার interface declare করলে **merge** হয়ে যায়।
- ক্লাসের সাথে `implements` ব্যবহার করতে সুবিধাজনক।

**উদাহরণ:**

```ts
interface User {
  name: string;
}

interface User {
  age: number;
}

// Final merged type: { name: string; age: number }
✔ Type Alias
অবজেক্ট ছাড়াও union, tuple, primitive, function, intersection ইত্যাদি সংজ্ঞায়িত করতে পারে।

একই নামে type দুইবার declare করলে error হয়।

Multiple টাইপ একত্র করতে & ব্যবহার করতে হয়।

Complex types এর জন্য খুবই সুবিধাজনক।

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
Extending	✔ Yes	✔ Using &
Union support	❌ No	✔ Yes
Tuples/Primitives support	❌ No	✔ Yes
Class implements	✔ Best choice	✔ Supported

📘 ২. TypeScript-এ keyof keyword-এর ব্যবহার
keyof হলো TypeScript-এর একটি keyword যা কোনো object টাইপের সব property নামকে একটি union type হিসেবে প্রদান করে।
এটি dynamic property access কে নিরাপদ (type-safe) করে তোলে।

✔ উদাহরণ
ts
Copy code
interface Person {
  name: string;
  age: number;
  email: string;
}

type PersonKeys = keyof Person; 
// "name" | "age" | "email"
✔ keyof ব্যবহার করে নিরাপদ property access

function getProperty(obj: Person, key: PersonKeys) {
  return obj[key];
}

const person1: Person = {
  name: "fahim",
  age: 19,
  email: "fahimhossain735@gmail.com;"
};

// Valid usages:
// getProperty(person1, "name");
// getProperty(person1, "age");