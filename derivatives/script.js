$(document).ready(() => {
    $(".mid").hide();
    $(".bottom").hide();
    $(".top").click(function () {
        $(this).hide();
        $(this).parent().find(".mid").show();
    });
    $(".mid").click(function () {
        $(this).hide();
        $(this).parent().find(".bottom").show();
    });
    $(".bottom").click(function () {
        $(this).hide();
        $(this).parent().find(".top").show();
    });
});
