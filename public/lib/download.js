$(document).ready(function () {

    $("#download").submit(function (event) {
        event.preventDefault();
		// array
        var search = {}
		search["username"] = $("#username").val();
		search["email"] = $("#email").val();

		$.ajax({
			type: "POST",
			contentType: "application/json",
			url: "/api/search",
			data: JSON.stringify(search), // convert array to JSON
			dataType: 'json',
			cache: false,
			timeout: 100000,
			success: function (data) {

				console.log("SUCCESS : ", data);

			},
			error: function (e) {

				console.log("ERROR : ", e);

			}
		});

    });

});