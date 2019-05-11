$("body").css("overflow", "hidden");

$(function () {
    var use_privacy = true;
    $('#form1').on('submit', function (e) {

        if (use_privacy) {
            if (!$(this).find('input[name=privacy]').prop('checked')) {
                alert('Для продолжения вы должны принять условия Пользовательского соглашения');
                return false;
            }
        }

        $('.formPersonal').css('display', 'none');
        $("body").css("overflow", "scroll");
        e.preventDefault();
    });
});