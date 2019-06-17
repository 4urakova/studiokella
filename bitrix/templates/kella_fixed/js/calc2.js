function calc() {

    var url = "http://www.studio.kella.ru/include/calc.php"; // the script where you handle the form input.

    $.ajax({
        type: "POST",
        url: url,
        data: $("#form_calc").serialize(), // serializes the form's elements.
        success: function(data)
        {
            //console.log(data);

            $( "#rezult_block" ).html(data);

        }
    });


};

$( document ).ready(function() {
    $('select').on('change', function() {
        calc();
    });

    $('input[type=checkbox]').on('change', function() {
        calc();
    });



    $("#form_calc").submit(function(e) {

        calc();

        e.preventDefault(); // avoid to execute the actual submit of the form.

    });



    $("#popup_back").click(function(e) {
        $("#popup_back").hide();
        $("#1click_popup_block").hide();
        $("#1click_popup_block").hide();
    });

    function buildElement(tagName, props) {
        var element = document.createElement(tagName);
        for (var propName in props) element[propName] = props[propName];
        return element;
    }

    function submit(link, props) {
        var form = buildElement('form', {
            method: 'post',
            action: link,
            target: '_blank'
        });
        for (var propName in props) form.appendChild(
            buildElement('input', {
                type: 'hidden',
                name: propName,
                value: props[propName]
            })
        );
        form.style.display = 'none';
        document.body.appendChild(form);
        form.submit();
    }


    $("#order_button").click(function(e) {

        var ti = $("input[name='print_run']:checked").val();

        var price = $("#currency_value_"+ti).text();
        $("#currency_value").val(price);

        $("#days_value").val($("#days_value_"+ti).text());

        $("#po").val($("#po_"+ti).val());

        $("#delivery_price").val($("#delivery_price_"+ti).val());

        yaCounter50680996.reachGoal('order_button');
        gtag('event', 'event', {'event_category' : 'order'});

        submit('/zakaz/', {  order_params: $("#form_calc").serialize() });

    });


    $("#1click_button").click(function(e) {

        var ti = $("input[name='print_run']:checked").val();

        var price = $("#currency_value_"+ti).text();
        $("#currency_value").val(price);

        $("#days_value").val($("#days_value_"+ti).text());

        $("#po").val($("#po_"+ti).val());

        $("#delivery_price").val($("#delivery_price_"+ti).val());

        gtag('event', 'sendform', {'event_category' : 'form','event_label' : 'order_1click'});
        yaCounter50680996.reachGoal('order_1click');

        submit('/1click/', {  order_params: $("#form_calc").serialize() });

    });

    $("#action_button").click(function(e) {


        window.location = window.location.href.split('?')[0] + 'action/';

    });

    $("#calc_button").click(function(e) {

        window.location = window.location.href.split('?')[0];

    });

    if($("#restart").val()>0)
    {
        calc();
    }
});

function onpantoncolor( color, code )
{

    $("#panton_color").val(color);
    $("#panton_color_code").val(code);

    //$( "#form_calc" ).submit();
    calc();
}

function onpantoncolor_face( color, code )
{
    $("#face_panton_color").val(color);
    $("#face_panton_color_code").val(code);


    calc();
}