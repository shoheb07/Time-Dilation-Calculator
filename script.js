function calculate(){

    const c = 3e8;

    let t =
    parseFloat(
    document.getElementById(
    "time"
    ).value
    );

    let percent =
    parseFloat(
    document.getElementById(
    "velocity"
    ).value
    );

    let v =
    (percent/100) * c;

    if(v >= c){

        document.getElementById(
        "result"
        ).innerHTML =
        "Velocity must be less than speed of light";

        return;
    }

    let gamma =
    1 /
    Math.sqrt(
    1 - (v*v)/(c*c)
    );

    let dilatedTime =
    t * gamma;

    document.getElementById(
    "result"
    ).innerHTML =
    `
    Lorentz Factor = ${gamma.toFixed(4)}
    <br><br>
    Dilated Time = ${dilatedTime.toFixed(4)} years
    `;
}
