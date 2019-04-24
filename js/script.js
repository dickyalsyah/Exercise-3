    $.getJSON("swapi.json", function(data){
        var items =[];
        $.each(data, function(key, val){
            items.push("<tr>");
            items.push("<td id=''"+key+"''>"+val.name+"</td>");
            items.push("<td id=''"+key+"''>"+val.rotation_period+"</td>");
            items.push("<td id=''"+key+"''>"+val.orbital_period+"</td>");
            items.push("<td id=''"+key+"''>"+val.diameter+"</td>");
            items.push("<td id=''"+key+"''>"+val.climate+"</td>");
            items.push("<td id=''"+key+"''>"+val.gravity+"</td>");
            items.push("<td id=''"+key+"''>"+val.terrain+"</td>");
            items.push("</tr>");
        });
        $("<tbody>", {html: items.join("")}).appendTo("table");
    });

    $.getJSON("swapi.json", function(){
        $("#filter").on("keyup", function() {
          var value = $(this).val().toLowerCase();
          $(".table tbody tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
        });
      });