api_url = "https://javaman.net:8081/lights"
var syncState = function () {
    $.ajax({
        url: api_url,
        method: "GET",
        success: function (data) {
            var state = data.state;
            if (state) {
                $("#off").css({
                    "background-color": "#1f1f1f"
                });
                $("#on").css({
                    "background-color": "#2b2b2b"
                });
            } else {
                $("#off").css({
                    "background-color": "#2b2b2b"
                });
                $("#on").css({
                    "background-color": "#1f1f1f"
                });
            }
        }
    });
};

$(document).ready(function () {
    $("#on").click(function () {
        $.ajax({
            url: api_url + "?state=on",
            method: "PUT",
        });
        $(this).blur();
    });

    $("#off").click(function () {
        $.ajax({
            url: api_url + "?state=off",
            method: "PUT",
        });
        $(this).blur();
    });

    syncState();
    setInterval(syncState, 100);
});