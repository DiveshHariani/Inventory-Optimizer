$(document).ready(function() {
        $(".datetimeinput").datepicker({changeYear: true,changeMonth: true, dateFormat: 'yy-mm-dd'});

        $('.table').paging({limit:10});
}
)
