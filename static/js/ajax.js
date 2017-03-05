$(function () {




    $('#addword_form').submit(function (e) {
        e.preventDefault();

        var addword =  $('input[name="addword"]:checked').val();
        var word =  $('#text1').val();
        // alert(addword);
        $.ajax({
            url : '/app/addword/',
            type: 'post',
            data: {
                csrfmiddlewaretoken : $('input[name="csrfmiddlewaretoken"]').val(),
                word: word,
                addword : addword
            },
            success:function (data) {
                if(word == "" || addword == ""){
                $('#addword_succ').html('Add Some word ');
                }
                else {

                     if(addword == "po")
                        $('#addword_succ').html('Positive word added successfully');
                    else if (addword == "ne")
                        $('#addword_succ').html('Negative word added successfully');
                    else if(addword == "mis")
                        $('#addword_succ').html('Misleading word added successfully');
                }
                 console.log(data);
            },
            error: function (data) {
                $('#addword_succ').html('');
                console.log(data['responseText']);
            }
        });
    });



    changeWord();

    setInterval(function(){
        changeWord();
    },1000  * 60);


    $('#random_form').submit(function(e){
        e.preventDefault();

        $('#text2').attr('disabled',false);
        var data = $('#random_form input[name="data"]').val();
        $('#text2').attr('disabled',true);

        var addword = $('#random_form input[name="optradio"]:checked').val();
        $.ajax({
            url: '/app/contribute/',
            type: 'post',
            data: {
                csrfmiddlewaretoken:$('#random_form input[name="csrfmiddlewaretoken"]').val(),
                addword : addword,
                data : data
            },
            success: function(data)
            {
                $('#data_succ').html(addword + ' word successfully contributed');
                changeWord();
                // console.log(data);
            },
            error:function(data)
            {
                // console.log(data['responseText']);
            }
        });

    });


    var check_pos = 0;
    var check_neg = 0;
    var check_mis = 0;
    $('input[name="optradio"]').click(function () {

        if (check_pos == 0) {
            check_pos++;
            $('#Postive').attr('disabled', false);
        }else
        {
            check_pos = 0;
            $('#Postive').attr('disabled', true);
        }
    });


    $('input[name="optradio_neg"]').click(function () {
        if (check_neg == 0) {

            check_neg++;
            $('#Nigative').attr('disabled', false);
        }else
        {

            check_neg = 0;
            $('#Nigative').attr('disabled', true);
        }
    });



    $('input[name="optradio_mis"]').click(function () {
        if (check_mis == 0) {
            check_mis++;
            $('#Missleading').attr('disabled', false);
        }else
        {
            check_mis = 0;
            $('#Missleading').attr('disabled', true);
        }
    });


    function changeWord() {
        $.ajax({
            url: '/app/contrib_step1/',
            type: 'post',
            data: {
                csrfmiddlewaretoken:$('#random_form input[name="csrfmiddlewaretoken"]').val()
            },
            success: function(data)
            {
                $('#text2').attr('disabled',false);
                $('#text2').val(data);
                $('#text2').attr('disabled',true);

                 // console.log(data);
            },
            error:function(data)
            {
                // console.log(data['responseText']);
            }
        });
    }



});