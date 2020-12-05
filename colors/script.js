var random = function () {
    return Math.round(Math.random() * 255);
};

var randomizeColors = function () {
    a_tar = [random(), random(), random()];
    b_tar = [random(), random(), random()];
}

randomizeColors();
var a_cur = a_tar;
var b_cur = b_tar;

var setColors = function (a, b) {
    var color_a = "rgb(" + a[0] + ", " + a[1] + ", " + a[2] + ")";
    var color_b = "rgb(" + b[0] + ", " + b[1] + ", " + b[2] + ")";
    $("body").css({
        "background": "linear-gradient(to bottom right, " + color_a + ", " + color_b + ")"
    });
};

var updateColors = function () {
    var multiplier = 0.025;

    diff_a = [
        Math.round((a_tar[0] - a_cur[0]) * multiplier),
        Math.round((a_tar[1] - a_cur[1]) * multiplier),
        Math.round((a_tar[2] - a_cur[2]) * multiplier)
    ];
    diff_b = [
        Math.round((b_tar[0] - b_cur[0]) * multiplier),
        Math.round((b_tar[1] - b_cur[1]) * multiplier),
        Math.round((b_tar[2] - b_cur[2]) * multiplier)
    ];
    a_cur = [
        a_cur[0] + diff_a[0],
        a_cur[1] + diff_a[1],
        a_cur[2] + diff_a[2]
    ];
    b_cur = [
        b_cur[0] + diff_b[0],
        b_cur[1] + diff_b[1],
        b_cur[2] + diff_b[2]
    ];

    setColors(a_cur, b_cur);
};

$(document).ready(function () {
    var fps = 100;

    setInterval(updateColors, 1000 / fps);

    $("#go").click(randomizeColors);
});