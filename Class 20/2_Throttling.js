function throttle(fn, limit) {
  let waiting = false;

  return function (...args) {
    if (!waiting) {
      fn.apply(this, args);
      waiting = true;

      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}

// Example usage
window.addEventListener(
  "scroll",
  throttle(() => {
    console.log("Scroll event fired");
  }, 1000)
);