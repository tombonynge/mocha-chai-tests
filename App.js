module.exports = {
    returnsTrue: () => {
        return true;
    },
    addValues: (a, b) => {
        return a + b;
    },
    bubbleSort: (a) => {
        let swap;
        let n = a.length - 1;
        let x = a;
        do {
            swap = false;
            for (let i = 0; i < n; i++) {
                if (x[i] < x[i + 1]) {
                    let temp = x[i];
                    x[i] = x[i + 1];
                    x[i + 1] = temp;
                    swap = true;
                }
            }
            n--;
        } while (swap);
        return x;
    },
    addObjectProperty(obj, prop, val) {
        let temp = { ...obj };
        temp[prop] = val;
        return temp;
    },
};
