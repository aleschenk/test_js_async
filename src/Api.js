// const resolver = (resolver, x) => {
//     setTimeout(() => {resolve(x); }, 2000);
// }

export function resolveAfter2Seconds(x) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(true) {
        resolve(x);
      } else {
        reject(Error("It Broke"))
      }
    }, 2000);
  });
}

export async function add1(x) {
  var a = resolveAfter2Seconds(20);
  var b = resolveAfter2Seconds(30);
  return x + await a + await b;
}

export async function add2(x) {
  var a = await resolveAfter2Seconds(20);
  var b = await resolveAfter2Seconds(30);
  return x + a + b;
}

/*
add1(10).then(v => {
  console.log(v);  // prints 60 after 2 seconds.
});

add2(10).then(v => {
  console.log(v);  // prints 60 after 4 seconds.
});
*/

// export const post = async ({ url, body, success, failure, dispatch }) => {
//   try {
//     const res = await fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(body),
//     })
//     const data = await res.json()
//     dispatch({ type: success, data })
//   } catch (e) {
//     dispatch({ type: failure })
//   }
// }