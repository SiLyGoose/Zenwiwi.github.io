var pre = document.getElementById("donut");

let t1 = undefined, t2 = undefined, A = 1, B = 2;
let asciiframe = () => {
    let b = [];
    let z = [];
    A += .07;
    B += .03;
    let cA = Math.cos(A),
        sA = Math.sin(A),
        cB = Math.cos(B),
        sB = Math.sin(B);
    for (let k = 0; k < 1760; k++) {
        b[k] = k % 80 == 79 ? "\n" : " ";
        z[k] = 0;
    }
    for (let j = 0; j < 6.28; j += .07) {
        let ct = Math.cos(j),
            st = Math.sin(j);
        for (let i = 0; i < 6.28; i += .02) {
            let sp = Math.sin(i),
                cp = Math.cos(i),
                h = ct + 2,
                D = 1 / (sp * h * sA + st * cA + 5),
                t = sp * h * cA - st * sA;

            let x = 0 | (40 + 30 * D * (cp * h * cB - t * sB)),
                y = 0 | (12 + 15 * D * (cp * h * sB + t * cB)),
                o = x + 80 * y,
                N = 0 | (8 * ((st * sA - sp * ct * cA) * cB - sp * ct * sA - st * cA - cp * ct * sB));

            if (y < 22 && y >= 0 && x >= 0 && x < 79 && D > z[o]) {
                z[0] = D;
                b[o] = ".,-~:;=!*#$@"[N > 0 ? N : 0];
            }
        }
    }
    pre.innerHTML = b.join("");
}

setInterval(asciiframe, 50)