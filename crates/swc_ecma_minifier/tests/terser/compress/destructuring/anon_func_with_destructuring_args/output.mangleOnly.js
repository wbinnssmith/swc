(function ({ foo: o = 1 + 0, bar: n = 2 }, [a = 3, b = 4]) {
    console.log(o, n, a, b);
})({ bar: 5 - 0 }, [, 6]);
